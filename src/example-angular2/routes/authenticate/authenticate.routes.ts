import { AuthenticateComponent } from './authenticate.component'
import { CoAutherGuard } from '../../co-auther.guard'

export const AuthenticateRoutes = [
  {
    path: 'authenticate',
    component: AuthenticateComponent,
    canActivate: [CoAutherGuard]
  }
]