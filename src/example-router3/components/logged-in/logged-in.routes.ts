import {LoggedInComponent} from './logged-in.component'
import {CoAutherGuard} from '../co-auther.guard'

export const LoggedInRoutes = [
  {
    path: '/logged-in',
    component: LoggedInComponent,
    canActivate: [CoAutherGuard]
  }
]