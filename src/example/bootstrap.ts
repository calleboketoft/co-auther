import 'reflect-metadata'
import 'zone.js'
import { bind, bootstrap } from 'angular2/angular2'
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

import { AppCmp } from './components/app-cmp'

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
])
