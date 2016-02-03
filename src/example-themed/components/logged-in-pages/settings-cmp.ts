import {Component} from 'angular2/core'
import {CanActivate} from 'angular2/router'
import {setTerminal} from '../../../co-auther/co-auther'

@Component({
  selector: 'settings-cmp',
  template: `Settings`
})
@CanActivate(setTerminal)
export class SettingsCmp {}
