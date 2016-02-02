import {Component} from 'angular2/core'
import {CanActivate} from 'angular2/router'
import {activationHelper} from '../../co-auther/co-auther'

@Component({
  selector: 'initial-request-cmp',
  template: `Initial request...`
})
@CanActivate(() => activationHelper('InitialRequest'))
export class InitialRequestCmp {}
