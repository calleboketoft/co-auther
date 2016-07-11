import {provideRouter, RouterConfig} from '@angular/router'

import {AuthenticateRoutes} from './authenticate/authenticate.routes'
import {InitialRequestRoutes} from './initial-request/initial-request.routes'
import {LoggedInRoutes} from './logged-in/logged-in.routes'
import {CoAutherGuard} from '../co-auther.guard'
import {ROUTE_AUTHENTICATE} from '../core-routes.config'

const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE_AUTHENTICATE
  },
  ...AuthenticateRoutes,
  ...InitialRequestRoutes,
  ...LoggedInRoutes
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CoAutherGuard
]