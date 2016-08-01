# co-auther

Authentication related routing logics for an app like this:

- You are using JWT authentication
- You have one route for authentication with username and password field
- You need to load some data before actually being logged in properly (user roles / updates / news)

This module helps managing the routing based on if the authentication token is available, if the user data has been loaded, and if any of these requests fail. The authentication token is stored in a configurable localStorage variable.

## Running example

- `npm install`
- `npm run build`
- `npm start`
- open browser and navigate to page

## Using module

There are 3 base routes of you application
- Authenticate: login screen
- Initialize: loading screen for first request (optional)
- Logged in: all pages that require authentication are children of this route

You have an "API service" with 3 methods (called login/logout/initialRequest) that return promises
- login: should resolve with authentication token string
- logout: makes logout request, nothing else
- initialRequest: the initial request for the app

Example of using module
- See `example` code for a complete example of how to use this module.
- The steps of integration are roughly:

1. Have an `apiService` with the three functions `login`, `logout`, and `makeInitialRequest`, which all return a promise. The function `makeInitialRequest` handles routing to `authenticate` route or `logged-in` route based on if initial request succeeds or not.
1. Implement `co-auther.provider.ts` which registers `apiService`, the three routes, and initializes `coAuther` itself.
1. Provide CoAuther with your custom `coAutherProvider` in your `main.ts` file.
1. Implement a custom `co-auther.guard.ts` that makes use of `coAuther` to decide which routes are accepted based on the current state of authentication and initial request(s). CoAutherGuard handles routing to `authenticate` route if you're not currently authenticated.




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