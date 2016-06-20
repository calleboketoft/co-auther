import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {CoAutherNg2} from '../../co-auther'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CoAutherGuard implements CanActivate {
  constructor (
    private coAutherNg2: CoAutherNg2,
    private router: Router
  ) {}
  canActivate (route) {
    // figure out if the requested route can be routed to
    let routeRequest = route.url[0].path
    let routeResponse = this.coAutherNg2.coAuther.activationHelper(routeRequest)
    let requestOk = routeRequest === routeResponse

    // NOTE: Perhaps all redirects should be handled from in here?
    // Does routing from within the guard mess something up though?
    if (!requestOk && (routeResponse === 'authenticate')) {
      this.router.navigateByUrl('authenticate')
    }
    return Observable.from([routeRequest === routeResponse])
  }
}
