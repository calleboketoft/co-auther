import { Component } from 'angular2/core'
import { CanActivate } from 'angular2/router'
import { activationHelper, getCoAuther } from '../../co-auther/co-auther'

@Component({
  selector: 'authenticate-cmp',
  template: `
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input #username type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input #password type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="button" (click)="login(username.value, password.value)">Sign in</button>
      </form>
    </div> <!-- /container -->
  `
})
@CanActivate(() => activationHelper('Authenticate'))
export class AuthenticateCmp {
  login (username, password) {
    getCoAuther().loginWrap(username, password)
  }
}
