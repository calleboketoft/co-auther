import {provideRouter, RouterConfig} from '@angular/router'

import {AuthenticateRoutes} from './authenticate/authenticate.routes'
import {InitialRequestRoutes} from './initial-request/initial-request.routes'
import {LoggedInRoutes} from './logged-in/logged-in.routes'
import {CoAutherGuard} from '../co-auther.guard'

import {DummyComponent} from './dummy.component'

const routes: RouterConfig = [
  {
    path: '',
    component: DummyComponent
  },
  ...AuthenticateRoutes,
  ...InitialRequestRoutes,
  ...LoggedInRoutes
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CoAutherGuard
]