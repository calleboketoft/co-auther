import {Component} from '@angular/core'
import {CanActivate} from '@angular/router-deprecated'
import {setTerminal} from '../../../co-auther/co-auther'

@Component({
  selector: 'settings-cmp',
  template: `Settings`
})
@CanActivate(setTerminal)
export class SettingsCmp {}
