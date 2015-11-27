import { Component } from 'angular2/angular2'
import { CanActivate } from 'angular2/router'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'initial-request-cmp',
  template: `Making initial request...`
})
@CanActivate(() => activationHelper('initialRequest'))
export class InitialRequestCmp { }
