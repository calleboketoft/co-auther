import {LoggedInComponent} from './logged-in.component'
import {CoAutherGuard} from '../co-auther.guard'
import {LoggedInChildComponent} from './logged-in-child.component'
import {LoggedInChild2Component} from './logged-in-child2.component'

export const LoggedInRoutes = [
  {
    path: 'logged-in',
    component: LoggedInComponent,
    canActivate: [CoAutherGuard],
    // Children are also guarded by canActivate
    children: [
      {
        path: '',
        component: LoggedInChildComponent
      },
      {
        path: 'child2/:id',
        component: LoggedInChild2Component
      }
    ]
  }
]