import {LoggedInComponent} from './logged-in.component'
import {CoAutherGuard} from '../co-auther.guard'
import {LoggedInChildComponent} from './logged-in-child.component'

export const LoggedInRoutes = [
  {
    path: '/logged-in',
    component: LoggedInComponent,
    canActivate: [CoAutherGuard],
    // Children are also guarded by canActivate
    children: [
      {
        path: '/child',
        component: LoggedInChildComponent
      }
    ]
  }
]