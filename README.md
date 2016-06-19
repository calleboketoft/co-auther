# co-auther

Authentication related routing logics for an Angular 2 app like this:

- You are using JWT authentication
- You have one route for authentication with username and password field
- You need to load some data before actually being logged in properly (user roles / updates / news)

This module helps managing the routing based on if the authentication token is available, if the user data has been loaded, and if any of these requests fail. The authentication token is stored in a configurable localStorage variable.

## Running example

- `npm install`
- `npm start`
- open browser and navigate to page

## Using module

There are 3 base routes of you application
- Authenticate: login screen
- Initialize: loading screen for first request
- Logged in: all pages that require authentication are children of this route

You have an "API service" with 3 methods (called login/logout/initialRequest) that return promises
- login: should resolve with authentication token string
- logout: makes logout request, nothing else
- initialRequest: the initial request for the app

In your root component, load your API service and the CoAuther module. Then configure routes and initialize the CoAuther in the constructor of the component. Also expose the logout function from the CoAuther where you will use that:

```javascript
import apiService from './apiService'
import {CoAuther} from 'co-auther'
...
// The 3 basic routes
[
  {path: '/authenticate', component: AuthenticateComponent},
  {path: '/logged-in', component: LoggedInComponent},
  {path: '/initialRequest', component: InitialRequestComponent}
]
...
constructor () {
  CoAuther.initialize(apiService, {
    routes: {
      loggedIn: 'logged-in',
      authenticate: 'authenticate',
      initialRequest: 'initial-request'
    },
    authDataKey: 'authData'
  })
}

logout () {
  CoAuther.getCoAuther().logoutWrap()
    .then((res) => {
      // Logged out, clear authData and reload window
      localStorage.removeItem('authData')
      window.location.reload()
    })
}
```

Use the authentication features in your authentication component:

```javascript
import {CoAuther} from 'co-auther'
...
export class AuthenticateComponent {
  login (username, login) {
    CoAuther.getCoAuther().loginWrap(username, login)
      .then((res) => {
        // Authentication success, save authData and route to "initial-request"
        localStorage.setItem('authData', res)
        this.router.navigate(['/initial-request'])
      })
      .catch((err) => {
        // Authentication failed, let user know
        alert('Authentication failed')
      })
  }
}
```

## NOTE: Error handling in apiService

When writing the error handling in the apiService you will want to use the .catch() of the promises. The problem is that once you've caught a rejected promise, it will bubble up as a resolved promise, so the parent will get a .then(). You can fix it by creating a new promise in your apiService and "rethrow" the error. In the file "example-common/api-service.ts" there is an example of this for the "initialRequest" function.

```javascript
let apiService = {
  makeInitialRequest () {
    return new Promise((resolve, reject) => {
      return myRequest
        .then((data) => {
          this.router.navigate(['logged-in'])
          resolve(data)
        })
        .catch((err) => {
          localStorage.remove('authData')
          this.router.navigate(['authenticate'])
          reject(err)
        })
    })
  }
}
```