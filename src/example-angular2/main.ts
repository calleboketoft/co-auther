import {bootstrap} from '@angular/platform-browser-dynamic'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {AppComponent} from './components/app.component'
import {APP_ROUTER_PROVIDERS} from './components/app.routes'
import {coAutherProvider} from './co-auther.provider'
import {ApiService} from './api.service'

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  ApiService,
  coAutherProvider // CoAutherGuard needs this
]).catch(err => console.log(err))
