import {bootstrap} from '@angular/platform-browser-dynamic'
import {AppComponent} from './components/app.component'
import {APP_ROUTER_PROVIDERS} from './components/app.routes'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {ApiService} from './api-service'
import {CoAuther} from '../../co-auther'

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  ApiService,
  CoAuther
])
.catch(err => console.log(err))