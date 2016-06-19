import {bootstrap} from '@angular/platform-browser-dynamic'
import {AppComponent} from './components/app.component'
import {APP_ROUTER_PROVIDERS} from './components/app.routes'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {ApiService} from './services/api-service'
import {CoAutherNg2} from '../../co-auther'

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  ApiService,
  CoAutherNg2
])
.catch(err => console.log(err))