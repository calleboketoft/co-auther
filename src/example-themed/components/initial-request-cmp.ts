import { Component } from 'angular2/core'
import { CanActivate } from 'angular2/router'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'initial-request-cmp',
  template: `Loading...`
})
@CanActivate(() => activationHelper('initialRequest'))
export class InitialRequestCmp { }
