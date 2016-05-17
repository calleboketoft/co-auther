import { Component } from '@angular/core'
import { CanActivate } from '@angular/router-deprecated'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'logged-in-cmp',
  template: `Logged in!`
})
@CanActivate(() => CoAuther.activationHelper('LoggedIn'))
export class LoggedInCmp { }
