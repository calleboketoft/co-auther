import { Component } from 'angular2/angular2'
import { CanActivate } from 'angular2/router'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'logged-in-cmp',
  template: `Logged in!`
})
@CanActivate(() => activationHelper('loggedIn'))
export class LoggedInCmp { }
