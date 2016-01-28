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
  template: `
    <div style="margin: 30px;">
      <p style="font-weight: bold;">co-auther demo</p>
      <a [routerLink]="['/Authenticate']">Authenticate</a>&nbsp;|&nbsp;
      <a [routerLink]="['/LoggedIn']">Logged In</a>&nbsp;|&nbsp;
      <a [routerLink]="['/InitialRequest']">Initial Request</a>&nbsp;|&nbsp;
      <a (click)="logOut()" style="cursor: pointer;">Log out</a>
      <br><br>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  // { path: '/', redirectTo: '/LoggedIn' },
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