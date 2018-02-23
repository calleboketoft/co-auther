import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { CoAuther } from '../../../../'

@Component({
  selector: 'authenticate',
  template: `
    <label>Username<input #username type="text"></label><br >
    <label>Password<input #password type="password"></label><br>
    <button (click)="login(username.value, password.value)">Login</button>
  `
})
export class AuthenticateComponent {
  constructor(private router: Router, private coAuther: CoAuther) {}

  login(username, password) {
    this.coAuther.loginWrap(username, password)
  }
}
