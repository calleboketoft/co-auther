import {Injectable} from '@angular/core'
import {CoAuther} from './co-auther'

@Injectable()
export class CoAutherNg2 {
  constructor () {
    this.coAuther = new CoAuther()
  }
  public coAuther;
  public init (options: {
    apiService: {
      login: any;
      logout: any;
      makeInitialRequest: any
    };
    loggedInRoute?: string;
    authenticateRoute?: string;
    initialRequestRoute?: string;
    authDataKey?: string;
    debugMode?: boolean;
  }) {
    this.coAuther.init(options)
  }
}