import {Component} from '@angular/core'
import * as CoAuther from '../../../co-auther/co-auther'

@Component({
  selector: 'authenticate',
  template: `
    <label>Username<input #username type='text'></label><br>
    <label>Password<input #password type='password'></label><br>
    <button (click)='login(username.value, password.value)'>Login</button>
  `
})
// @CanActivate(() => CoAuther.activationHelper('Authenticate'))
export class AuthenticateComponent {
  login (username, password) {
    CoAuther.getCoAuther().loginWrap(username, password)
  }
}
