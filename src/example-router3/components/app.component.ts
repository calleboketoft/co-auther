// Angular
import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'

// Pages
import {AuthenticateComponent} from './authenticate/authenticate.component'
import {InitialRequestComponent} from './initial-request/initial-request.component'
import {LoggedInComponent} from './logged-in/logged-in.component'

// API and authentication services
import apiService from '../../example-common/api-service'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div style='margin: 30px;'>
      <p style='font-weight: bold;'>co-auther demo</p>
      <a [routerLink]='["/authenticate"]'>Authenticate</a>&nbsp;|&nbsp;
      <a [routerLink]='["/logged-in"]'>Logged In</a>&nbsp;|&nbsp;
      <a [routerLink]='["/initial-request"]'>Initial Request</a>&nbsp;|&nbsp;
      <a (click)='logOut()' style='cursor: pointer;'>Log out</a>
      <br><br>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor () {
    // Initialize auther here, now apiService will be wrapped
    // CoAuther.initialize(apiService, {
    //   routes: {
    //     loggedIn: 'logged-in',
    //     authenticate: 'authenticate',
    //     initialRequest: 'initial-request'
    //   },
    //   dontTouchLocalStorage: false,
    //   authData: 'authData'
    // })
  }

  logOut () {
    // CoAuther.getCoAuther().logoutWrap()
  }
}