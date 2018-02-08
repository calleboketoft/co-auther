import { InitialRequestComponent } from './initial-request.component'
import { ROUTE_INITIAL_REQUEST } from '../../core-routes.config'
import { CoAutherGuard } from '../../co-auther.guard'

export const InitialRequestRoutes = [
  {
    path: ROUTE_INITIAL_REQUEST,
    component: InitialRequestComponent,
    canActivate: [CoAutherGuard]
  }
]