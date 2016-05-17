import {Component} from '@angular/core'
import {CanActivate} from '@angular/router-deprecated'
import * as CoAuther from '../../../co-auther/co-auther'

@Component({
  selector: 'settings-cmp',
  template: `
    <div class='row'>
      <div class='col-xs-12'>
        Settings
      </div>
    </div>
  `
})
@CanActivate(CoAuther.setTerminal)
export class SettingsCmp {}
