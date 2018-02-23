import { AuthenticateComponent } from './authenticate.component'
import { ROUTE_AUTHENTICATE } from '../../core-routes.config'
import { CoAutherGuard } from '../../co-auther.guard'

export const AuthenticateRoutes = [
  {
    path: ROUTE_AUTHENTICATE,
    component: AuthenticateComponent,
    canActivate: [CoAutherGuard]
  }
]
