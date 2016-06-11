import {provideRouter, RouterConfig} from '@angular/router'

import {AuthenticateRoutes} from './authenticate/authenticate.routes'
import {InitialRequestRoutes} from './initial-request/initial-request.routes'
import {LoggedInRoutes} from './logged-in/logged-in.routes'

const routes: RouterConfig = [
  ...AuthenticateRoutes,
  ...InitialRequestRoutes,
  ...LoggedInRoutes
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]