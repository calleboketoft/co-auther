import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {CoAutherNg2} from '../../../../co-auther'

@Component({
  selector: 'authenticate',
  template: `
    <label>Username<input #username type='text'></label><br>
    <label>Password<input #password type='password'></label><br>
    <button (click)='login(username.value, password.value)'>Login</button>
  `
})
export class AuthenticateComponent {
  constructor (
    private router: Router,
    private coAutherNg2: CoAutherNg2
  ) {}

  login (username, password) {
    this.coAutherNg2.coAuther.loginWrap(username, password)
  }
}
