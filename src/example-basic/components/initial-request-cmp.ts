import { Component } from '@angular/core'
import { CanActivate } from '@angular/router-deprecated'
import * as CoAuther from '../../co-auther/co-auther'

@Component({
  selector: 'initial-request-cmp',
  template: `Making initial request...`
})
@CanActivate(() => CoAuther.activationHelper('InitialRequest'))
export class InitialRequestCmp { }
