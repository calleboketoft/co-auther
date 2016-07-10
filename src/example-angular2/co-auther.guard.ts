import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {CoAuther} from '../../co-auther'
import {Observable} from 'rxjs/Observable'
import {
  ROUTE_AUTHENTICATE,
  ROUTE_INITIAL_REQUEST,
  ROUTE_LOGGED_IN
} from './core-routes.config'

// Memorize navigation attempt on loading page
export let memoryStateUrl = ''

@Injectable()
export class CoAutherGuard implements CanActivate {
  constructor (
    private coAuther: CoAuther,
    private router: Router
  ) {}
  canActivate (route, state) {
    // figure out if the requested route can be routed to
    let routeRequest = route.url[0].path
    let routeResponse = this.coAuther.activationHelper(routeRequest)
    let requestOk = routeRequest === routeResponse

    // Memorize where attempting to navigate to when opening page
    // the exported member "memoryStateUrl" will contain destination
    let unauthedLoggedInAttempt = routeRequest === ROUTE_LOGGED_IN && routeResponse === ROUTE_AUTHENTICATE
    let authedLoggedInAttempt = routeRequest === ROUTE_LOGGED_IN && routeResponse === ROUTE_INITIAL_REQUEST
    if (unauthedLoggedInAttempt || authedLoggedInAttempt) {
      memoryStateUrl = state.url
    }

    // NOTE: Perhaps all redirects should be handled from in here?
    // Does routing from within the guard mess something up though?
    if (!requestOk && (routeResponse === ROUTE_AUTHENTICATE)) {
      this.router.navigateByUrl(ROUTE_AUTHENTICATE)
    }
    return Observable.from([routeRequest === routeResponse])
  }
}
