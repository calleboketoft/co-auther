import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
  selector: 'logged-in',
  directives: [ROUTER_DIRECTIVES],
  template: `
    Logged in!<br>
    <br><br>
    <router-outlet></router-outlet>
  `
})
export class LoggedInComponent {}
