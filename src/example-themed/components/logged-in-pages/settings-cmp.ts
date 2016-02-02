import {Component} from 'angular2/core'
import {CanActivate} from 'angular2/router'

@Component({
  selector: 'settings-cmp',
  template: `Settings`
})
@CanActivate((next, previous) => {
  console.log('next:', next ? '"' + next.urlPath + '"' : null, 'previous:', previous ? '"' + previous.urlPath + '"' : null)
  return true
})
export class SettingsCmp {}
