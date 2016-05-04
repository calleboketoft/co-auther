import { Component } from '@angular/core'
import { CanActivate } from '@angular/router-deprecated'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'logged-in-cmp',
  template: `Logged in!`
})
@CanActivate(() => activationHelper('LoggedIn'))
export class LoggedInCmp { }
