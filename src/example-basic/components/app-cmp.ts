// Angular
import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES, RouteConfig, Router } from '@angular/router-deprecated'

// Pages
import { AuthenticateCmp } from './authenticate-cmp'
import { InitialRequestCmp } from './initial-request-cmp'
import { LoggedInCmp } from './logged-in-cmp'

// API and authentication services
import apiService from '../../example-common/api-service'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'app',
  template: `
    <div style='margin: 30px;'>
      <p style='font-weight: bold;'>co-auther demo</p>
      <a [routerLink]='["/Authenticate"]'>Authenticate</a>&nbsp;|&nbsp;
      <a [routerLink]='["/LoggedIn"]'>Logged In</a>&nbsp;|&nbsp;
      <a [routerLink]='["/InitialRequest"]'>Initial Request</a>&nbsp;|&nbsp;
      <a (click)='logOut()' style='cursor: pointer;'>Log out</a>
      <br><br>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/authenticate', name: 'Authenticate', component: AuthenticateCmp, useAsDefault: true },
  { path: '/loggedIn', name: 'LoggedIn', component: LoggedInCmp },
  { path: '/initialRequest', name: 'InitialRequest', component: InitialRequestCmp }
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
      dontTouchLocalStorage: false,
      authData: 'authData'
    }, (routePath) => { // Register a new routing function
      this.router.navigate(['/' + routePath])
    })
  }

  logOut () {
    CoAuther.getCoAuther().logoutWrap()
  }
}