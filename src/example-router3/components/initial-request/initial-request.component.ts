import {Component} from '@angular/core'
import * as CoAuther from '../../../co-auther/co-auther'

@Component({
  selector: 'initial-request',
  template: `Making initial request...`
})
// @CanActivate(() => CoAuther.activationHelper('InitialRequest'))
export class InitialRequestComponent { }
