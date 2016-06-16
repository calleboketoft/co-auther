// Angular
import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated'

// Pages
import {AuthenticateCmp} from './authenticate-cmp'
import {InitialRequestCmp} from './initial-request-cmp'
import {LoggedInCmp} from './logged-in-cmp'

// API and authentication services
import apiService from '../../example-common/api-service'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/authenticate',    name: 'Authenticate',     component: AuthenticateCmp,   useAsDefault: true},
  {path: '/loggedIn/...',    name: 'LoggedIn',         component: LoggedInCmp},
  {path: '/initialRequest',  name: 'InitialRequest',   component: InitialRequestCmp}
])
export class AppCmp {
  constructor (private router: Router) {
    // Initialize auther here, now apiService will be wrapped
    CoAuther.initialize(apiService, {
      routes: {
        loggedIn: 'LoggedIn',
        authenticate: 'Authenticate',
        initialRequest: 'InitialRequest'
      },
      authData: 'authData',
      dontTouchLocalStorage: false
    // Register a new routing function
    }, (routePath) => {
      this.router.navigate(['/' + routePath])
    })
  }
}