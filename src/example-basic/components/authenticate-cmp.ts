import { Component } from '@angular/core'
import { CanActivate } from '@angular/router-deprecated'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'authenticate-cmp',
  template: `
    <label>Username<input #username type='text'></label><br>
    <label>Password<input #password type='password'></label><br>
    <button (click)='login(username.value, password.value)'>Login</button>
  `
})
@CanActivate(() => CoAuther.activationHelper('Authenticate'))
export class AuthenticateCmp {
  login (username, password) {
    CoAuther.getCoAuther().loginWrap(username, password)
  }
}
