import {InitialRequestComponent} from './initial-request.component'
import {CoAutherGuard} from '../co-auther.guard'

export const InitialRequestRoutes = [
  {
    path: 'initial-request',
    component: InitialRequestComponent,
    canActivate: [CoAutherGuard]
  }
]