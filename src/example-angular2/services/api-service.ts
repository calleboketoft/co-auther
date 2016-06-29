// Simple mock example of an authentication API service
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {
  ROUTE_AUTHENTICATE,
  ROUTE_INITIAL_REQUEST,
  ROUTE_LOGGED_IN
} from '../core-routes.config'
import {memoryStateUrl} from '../co-auther.guard'

@Injectable()
export class ApiService {
  constructor (private router: Router) {}

  public login () {
    return new Promise((resolve, reject) => {
      return mockRequest('Authentication')
        .then((data:string) => {
          localStorage.setItem('authData', data)
          this.router.navigate([ROUTE_INITIAL_REQUEST])
          resolve(data)
        })
        .catch((err) => {
          alert('authentication failed')
          reject(err)
        })
    })
  }

  public logout () {
    return mockRequest('Logout')
      .then(() => {
        localStorage.removeItem('authData')
        window.location.reload()
      })
  }

  public makeInitialRequest () {
    // Here's an example of how to handle errors in the apiService. Since coAuther
    // needs to get the error in the .catch() it's necessary to create a new promise
    // and "rethrow" the error again.
    return new Promise((resolve, reject) => {
      return mockRequest('Initial request', 500)
        .then((data) => {
          console.log('Initial request ok, route to "logged-in"')
          let finalDestination = memoryStateUrl || ROUTE_LOGGED_IN
          this.router.navigateByUrl(finalDestination)
          resolve(data)
        })
        .catch((err) => {
          console.log('Initial request failed, route to "authenticate"')
          localStorage.removeItem('authData')
          this.router.navigateByUrl(ROUTE_AUTHENTICATE)
          reject(err)
        })
    })

  }
}

function mockRequest (requestType, timeout = 0) {
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
