import {Injectable} from '@angular/core'
import {CanActivate} from '@angular/router'
import {CoAutherNg2} from '../../../co-auther'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CoAutherGuard implements CanActivate {
  constructor (private coAutherNg2: CoAutherNg2) {}
  canActivate (route) {
    // figure out if the requested route can be routed to
    let routeRequest = route.url[0].path
    let routeResponse = this.coAutherNg2.coAuther.activationHelper(routeRequest)
    return Observable.from([routeRequest === routeResponse])
  }
}
