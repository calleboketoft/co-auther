export class CoAuther {
  private initialRequestFailed = false;
  private initialRequestPending = false;
  private initialDataLoaded = false;

  // config
  private apiService;
  constructor (
    private loggedInRoute = 'logged-in',
    private authenticateRoute = 'authenticate',
    private initialRequestRoute = 'initial-request',
    private authDataKey = 'authData',
    private debugMode = false
  ) {}

  // set options after constructor (for angular 2 reasons)
  public init (options) {
    this.apiService = options.apiService

    this.loggedInRoute = options.loggedInRoute || this.loggedInRoute
    this.authenticateRoute = options.authenticateRoute || this.authenticateRoute
    this.initialRequestRoute = options.initialRequestRoute || this.initialRequestRoute
    this.authDataKey = options.authDataKey || this.authDataKey
    this.debugMode = options.debugMode || this.debugMode
  }

  public loginWrap (...args) {
    // if initial request failed before, consider this a retry
    this.initialRequestFailed = false
    return this.apiService.login.apply(this.apiService, args)
  }

  public logoutWrap (...args) {
    return this.apiService.logout.apply(this.apiService, args)
  }

  public makeInitialRequestWrap () {
    return this.apiService.makeInitialRequest()
      .then(() => {
        this.initialDataLoaded = true
      })
  }

  public activationHelper (routeRequest) {
    let routeResult = null
    let authData = localStorage.getItem(this.authDataKey)

    // authData and initialRequest done, suggest LOGGED_IN
    if (authData && this.initialDataLoaded) {
      routeResult = this.loggedInRoute

    // no authData and no initialRequest pending, suggest AUTHENTICATE
    } else if (!authData && !this.initialRequestPending) {
      routeResult = this.authenticateRoute

    // authData is available, suggest INITIAL_REQUEST
    } else {
      routeResult = this.initialRequestRoute
      if (!this.initialRequestPending && !this.initialRequestFailed) {
        this.initialRequestPending = true
        this.makeInitialRequestWrap()
          .then(() => {

            // initial request successful, suggest LOGGED_IN
            this.initialRequestPending = false
            routeResult = this.loggedInRoute
          })
          .catch((err) => {

            // initial request failed, suggest AUTHENTICATE
            this.initialRequestPending = false
            this.initialRequestFailed = true
            routeResult = this.authenticateRoute
          })
      } else if (this.initialRequestFailed && authData) {

        // error state, when initialRequest fails, you need to clear authData
        console.error('Initial request promise was rejected. You need to clear authData from localStorage.')
      }
    }

    if (this.debugMode) {
      console.log('[co-auther] routeRequest: ' + routeRequest)
      console.log('[co-auther] routeResult: ' + routeResult)
    }
    return routeResult
  }
}