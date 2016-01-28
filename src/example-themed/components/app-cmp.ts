// Angular
import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'

// Pages
import { AuthenticateCmp } from './authenticate-cmp'
import { InitialRequestCmp } from './initial-request-cmp'
import { LoggedInCmp } from './logged-in-cmp'

// API and authentication services
import apiService from '../../example-common/api-service'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/authenticate', as: 'Authenticate', component: AuthenticateCmp },
  { path: '/loggedIn', as: 'LoggedIn', component: LoggedInCmp },
  { path: '/initialRequest', as: 'InitialRequest', component: InitialRequestCmp }
])
export class AppCmp {
  constructor () {
    // Initialize auther here, now apiService will be wrapped
    CoAuther.initialize(apiService, {
      routes: {
        loggedIn: 'loggedIn',
        authenticate: 'authenticate',
        initialRequest: 'initialRequest'
      },
      authData: 'authData'
    })
  }

  logOut () {
    CoAuther.getCoAuther().logoutWrap()
  }
}