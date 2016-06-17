import {Injectable} from '@angular/core'
import {CanActivate} from '@angular/router'
import {activationHelper} from '../../co-auther/co-auther'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CoAutherGuard implements CanActivate {
  canActivate (route) {
    // figure out if the requested route can be routed to
    let routeRequest = route.url[0].path
    let routeResponse = activationHelper(routeRequest)
    return Observable.from([routeRequest === routeResponse])
  }
}
