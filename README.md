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


## Running tests

`npm test`

## Using module

There are 3 base routes of you application
- Authenticate: login screen
- Initialize: loading screen for first request
- Logged in: all pages that require authentication are children of this route

You have an "API service" with 3 methods that return promises
- login: should resolve with authentication token
- logout: makes logout request, nothing else
- initialRequest

In your root component, load your API service and the CoAuther module. Then configure routes and initialize the CoAuther in the constructor of the component. Also expose the logout function from the CoAuther where you will use that:

```javascript
import apiService from './apiService'
import * as CoAuther from 'co-auther'
...
constructor () {
  CoAuther.initialize(apiService, {
    routes: {
      loggedIn: 'loggedIn',
      authenticate: 'authenticate',
      initialRequest: 'initialRequest'
    },
    authData: 'authData'
  })
}
logout () {
  CoAuther.getCoAuther().logoutWrap()
}
```

Use the authentication features in your authentication component:

```javascript
import { activationHelper, getCoAuther } from 'co-auther'
...
@CanActivate(() => activationHelper('authenticate'))
export class AuthenticateCmp {
  login (username, login) {
    getCoAuther().loginWrap(username, login)
  }
}
```

Use the activationHelper in the initialRequest route:

```javascript
import { activationHelper } from 'co-auther'
...
@CanActivate(() => activationHelper('initialRequest'))
```

And finally use activationHelper in loggedIn route:

```javascript
import { activationHelper } from 'co-auther'
...
@CanActivate(() => activationHelper('loggedIn'))
```
