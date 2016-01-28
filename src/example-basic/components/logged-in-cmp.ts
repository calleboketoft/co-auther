import { Component } from 'angular2/core'
import { CanActivate } from 'angular2/router'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'logged-in-cmp',
  template: `Logged in!`
})
@CanActivate(() => activationHelper('loggedIn'))
export class LoggedInCmp { }
