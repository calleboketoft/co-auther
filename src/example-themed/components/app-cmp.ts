// Angular
import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router'

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
  {path: '/authenticate',    as: 'Authenticate',     component: AuthenticateCmp,   useAsDefault: true},
  {path: '/loggedIn',        as: 'LoggedIn',         component: LoggedInCmp},
  {path: '/initialRequest',  as: 'InitialRequest',   component: InitialRequestCmp}
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
      authData: 'authData'
    }, (routePath) => { // Register a new routing function
      this.router.navigate(['/' + routePath])
    })
  }

  logOut () {
    CoAuther.getCoAuther().logoutWrap()
  }
}