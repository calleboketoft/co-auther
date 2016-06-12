import {provideRouter, RouterConfig} from '@angular/router'

import {AuthenticateRoutes} from './authenticate/authenticate.routes'
import {InitialRequestRoutes} from './initial-request/initial-request.routes'
import {LoggedInRoutes} from './logged-in/logged-in.routes'
import {CoAutherGuard} from './co-auther.guard'

const routes: RouterConfig = [
  {
    // https://github.com/angular/vladivostok/issues/33
    path: '/',
    redirectTo: '/authenticate'
  },
  ...AuthenticateRoutes,
  ...InitialRequestRoutes,
  ...LoggedInRoutes
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CoAutherGuard
]