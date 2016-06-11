import {Injectable} from '@angular/core'
import {CanActivate} from '@angular/router'
import {activationHelper} from '../../co-auther/co-auther'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CoAutherGuard implements CanActivate {
  canActivate (route) {
    return Observable.from([activationHelper(route.urlSegments[0].path)])
  }
}
