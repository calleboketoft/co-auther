import { Component } from '@angular/core'
import { CanActivate } from '@angular/router-deprecated'
import { activationHelper } from '../../co-auther/co-auther'

@Component({
  selector: 'initial-request-cmp',
  template: `Making initial request...`
})
@CanActivate(() => activationHelper('InitialRequest'))
export class InitialRequestCmp { }
