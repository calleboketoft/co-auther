import {Component} from '@angular/core'
import {CanActivate} from '@angular/router-deprecated'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'authenticate-cmp',
  styles: [`
    .card {
      max-width: 400px;
      margin: 0 auto;
      padding-top: 20px;
      padding-bottom: 20px;
      background-color: #eee;
      border: 1px solid #CCCCCC;
    }
    .form-signin {
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
    }
    .form-signin .form-signin-heading,
    .form-signin .checkbox {
      margin-bottom: 10px;
    }
    .form-signin .checkbox {
      font-weight: normal;
    }
    .form-signin .form-control {
      position: relative;
      height: auto;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      padding: 10px;
      font-size: 16px;
    }
    .form-signin .form-control:focus {
      z-index: 2;
    }
    .form-signin input[type="text"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    h2 i {
      margin-right: 15px;
    }
    button.signin {
      margin-top: 15px;
    }
  `],
  template: `
    <div class='container'>
      <form class='form-signin'>
        <h2 class='form-signin-heading'>Please sign in</h2>
        <label for='inputEmail' class='sr-only'>Email address</label>
        <input #username type='email' id='inputEmail' class='form-control' placeholder='Email address' required autofocus>
        <label for='inputPassword' class='sr-only'>Password</label>
        <input #password type='password' id='inputPassword' class='form-control' placeholder='Password' required>
        <div class='checkbox'>
          <label>
            <input type='checkbox' value='remember-me'> Remember me
          </label>
        </div>
        <button class='btn btn-lg btn-primary btn-block' type='button'
          (click)='login(username.value, password.value)'>
          Sign in
        </button>
      </form>
    </div>
  `
})
@CanActivate(() => CoAuther.activationHelper('Authenticate'))
export class AuthenticateCmp {
  public login (username, password) {
    CoAuther.getCoAuther().loginWrap(username, password)
      .then((successMsg) => {
        console.log(successMsg)
      })
      .catch((errMsg) => {
        console.log(errMsg)
      })
  }
}
