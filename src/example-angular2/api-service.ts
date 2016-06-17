// Simple mock example of an authentication API service
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'

@Injectable()
export class ApiService {
  constructor (private router: Router) {}

  public login () {
    return mockRequest('Authentication', 0)
  }

  public logout () {
    return mockRequest('Logout', 0)
  }

  public makeInitialRequest () {
    // Here's an example of how to handle errors in the apiService. Since coAuther
    // needs to get the error in the .catch() it's necessary to create a new promise
    // and "rethrow" the error again.
    return new Promise((resolve, reject) => {
      // Some timeout just to show the loading route.
      return mockRequest('Initial request', 500)
        .then((data) => {
          this.router.navigate(['logged-in'])
          resolve(data)
        })
        .catch((err) => {
          this.router.navigate(['authenticate'])
          customErrorHandler(err)
          reject(err)
        })
    })

  }
}

function mockRequest (requestType, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (confirm(requestType + ' success?')) {
        resolve('authDataHere')
      } else {
        reject(requestType + ' failed')
      }
    }, timeout)
  })
}

function customErrorHandler (err) {
  localStorage.removeItem('authData')
  console.log('do amazing stuff with this error:', err)
}
