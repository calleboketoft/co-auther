import { bootstrap } from '@angular/platform-browser-dynamic'
import { bind } from '@angular/core'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { HTTP_PROVIDERS } from '@angular/http'

import { AppCmp } from './components/app-cmp'

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
])
