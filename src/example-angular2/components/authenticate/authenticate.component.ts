import {Component} from '@angular/core'
import {Router} from '@angular/router'
import * as CoAuther from '../../../co-auther/co-auther'

@Component({
  selector: 'authenticate',
  template: `
    <label>Username<input #username type='text'></label><br>
    <label>Password<input #password type='password'></label><br>
    <button (click)='login(username.value, password.value)'>Login</button>
  `
})
export class AuthenticateComponent {
  constructor (private router: Router) {}

  login (username, password) {
    CoAuther.getCoAuther().loginWrap(username, password)
  }
}
