///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from 'angular2/platform/browser'
import { bind } from 'angular2/core'
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

import { AppCmp } from './components/app-cmp'

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
])
