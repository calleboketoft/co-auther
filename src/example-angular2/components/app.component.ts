// Angular
import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, Router} from '@angular/router'

// Pages
import {AuthenticateComponent} from './authenticate/authenticate.component'
import {InitialRequestComponent} from './initial-request/initial-request.component'
import {LoggedInComponent} from './logged-in/logged-in.component'

// API and authentication services
import {ApiService} from '../services/api-service'
import {CoAutherNg2} from '../../../co-auther'

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div style='margin: 30px;'>
      <p style='font-weight: bold;'>co-auther demo</p>
      <a [routerLink]='["/authenticate"]'>Authenticate</a>&nbsp;|&nbsp;
      <a [routerLink]='["/logged-in"]'>Logged In</a>&nbsp;|&nbsp;
      <a [routerLink]='["/logged-in/child2/", 6]'>Logged in - Child2</a>&nbsp;|&nbsp;
      <a [routerLink]='["/initial-request"]'>Initial Request</a>&nbsp;|&nbsp;
      <a (click)='logout()' style='cursor: pointer;'>Log out</a>
      <br><br>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor (
    private router: Router,
    private apiService: ApiService,
    private coAutherNg2: CoAutherNg2
  ) {
    coAutherNg2.init({
      apiService,
      debugMode: true
    })
  }

  logout () {
    this.coAutherNg2.coAuther.logoutWrap()
  }
}