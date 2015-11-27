import { Component } from 'angular2/angular2'
import { CanActivate } from 'angular2/router'
import { activationHelper, getCoAuther } from '../../co-auther/co-auther'

@Component({
  selector: 'authenticate-cmp',
  template: `
    <label>Username<input #username type="text"></label><br>
    <label>Password<input #password type="password"></label><br>
    <button (click)="login(username.value, password.value)">Login</button>
  `
})
@CanActivate(() => activationHelper('authenticate'))
export class AuthenticateCmp {
  login (username, password) {
    getCoAuther().loginWrap(username, password)
  }
}
