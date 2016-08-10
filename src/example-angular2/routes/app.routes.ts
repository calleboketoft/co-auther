import { Routes, RouterModule } from '@angular/router'
import { AuthenticateRoutes } from './authenticate/authenticate.routes'
import { InitialRequestRoutes } from './initial-request/initial-request.routes'
import { LoggedInRoutes } from './logged-in/logged-in.routes'
import { ROUTE_AUTHENTICATE } from '../core-routes.config'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE_AUTHENTICATE
  },
  ...AuthenticateRoutes,
  ...InitialRequestRoutes,
  ...LoggedInRoutes
]

export const routing = RouterModule.forRoot(routes)
