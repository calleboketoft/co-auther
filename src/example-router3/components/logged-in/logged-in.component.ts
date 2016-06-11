import {Component} from '@angular/core'
import * as CoAuther from '../../../co-auther/co-auther'

@Component({
  selector: 'logged-in',
  template: `Logged in!`
})
// @CanActivate(() => CoAuther.activationHelper('LoggedIn'))
export class LoggedInComponent { }
