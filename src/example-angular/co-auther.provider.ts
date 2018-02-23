/**
 * Example provider for using CoAuther with Angular 2
 **/

import { CoAuther } from '../../'

// Project specific api service and route values etc.
import { ApiService } from './api.service'
import {
  ROUTE_AUTHENTICATE,
  ROUTE_INITIAL_REQUEST,
  ROUTE_LOGGED_IN
} from './core-routes.config'

export let coAutherProvider = {
  provide: CoAuther,
  useFactory: coAutherFactory,
  // CoAuther needs an instance of Angular 2 service "ApiService"
  deps: [ApiService]
}

// Factory function for CoAuther, specifying how to instantiate it
function coAutherFactory(apiService: ApiService) {
  return new CoAuther({
    apiService,
    initialRequestRoute: ROUTE_INITIAL_REQUEST,
    authenticateRoute: ROUTE_AUTHENTICATE,
    loggedInRoute: ROUTE_LOGGED_IN,
    authDataKey: 'authData',
    debugMode: true
  })
}
