// Config params
let config = {
  LOGGED_IN: 'loggedIn',
  AUTHENTICATE: 'authenticate',
  INITIAL_REQUEST: 'initialRequest',
  AUTH_DATA: 'authData',
  dontTouchLocalStorage: true
}

let terminalRoute = null
let initialRequestFailed = false
let coAuther

// Basic routing function
function basicRouting (afterHash) {
  let loc = window.location
  window.location.href = `${loc.protocol}//${loc.host}${loc.pathname}#/${afterHash}`
}
// Basic default route function, should be overridden
let routeFunction = (afterHash) => {
  basicRouting(afterHash)
}
let getCoAuther = function () {
  if (!coAuther) {
    throw 'CoAuther has not been initialized yet'
  } else {
    return coAuther
  }
}

// Determine if a route canActivate or not
var initialRequestPending = false
function activationHelper (destinationRequested): boolean {
  let canActivate = false
  let destinationResult = null
  let authData = getCoAuther().getAuthData()
  let initialDataLoaded = getCoAuther().isInitialDataLoaded()

  // authData and initialRequest done, you are logged in
  if (authData && initialDataLoaded) {
    destinationResult = config.LOGGED_IN
    canActivate = destinationRequested === destinationResult

  // no authData and no initialRequest pending, go to authentication page
  } else if (!authData && !initialRequestPending) {
    destinationResult = config.AUTHENTICATE
    canActivate = destinationRequested === destinationResult

  // there is authData, go make initial request
  } else {
    destinationResult = config.INITIAL_REQUEST
    canActivate = destinationRequested === destinationResult
    if (!initialRequestPending && !initialRequestFailed) {
      initialRequestPending = true
      getCoAuther().makeInitialRequestWrap()
        .then(() => {
          initialRequestPending = false

          // initialRequest done, move on to logged in
          if (terminalRoute) {
            return goToTerminal()
          }
          return routeFunction(config.LOGGED_IN)
        })
        .catch((err) => {
          // initial request failed, clear auth data from login and go to authenticate
          initialRequestPending = false
          initialRequestFailed = true
          clearAuthData()
          return routeFunction(config.AUTHENTICATE)
        })
    } else if (initialRequestFailed && authData) {
      console.error('Initial request promise was rejected. You have manual authData management and need to clear authData from localStorage manually.')
    }
  }
  if (!canActivate) {
    routeFunction(destinationResult)
    return canActivate
  }
  return canActivate
}

// terminal memory
function setTerminal () {
  terminalRoute = window.location.hash.substring(2)
  return true
}
function goToTerminal () {
  basicRouting(terminalRoute)
}

function CoAuther (apiService) {
  let initialDataLoaded = false
  function isInitialDataLoaded () {
    return initialDataLoaded
  }
  let initialRequestRes

  function loginWrap (...args) {
    initialRequestFailed = false // reset this one
    return apiService.login.apply(apiService, args)
      .then((res) => {
        // authData has arrived, go make initial request
        setAuthData(res)
        routeFunction(config.INITIAL_REQUEST)
      })
  }

  function logoutWrap (...args) {
    return apiService.logout.apply(apiService, args)
      .then(() => {
        clearAuthData()
      })
  }

  function makeInitialRequestWrap () {
    return apiService.makeInitialRequest()
      .then((data) => {
        // Flag for intial data
        initialDataLoaded = true
      })
  }

  return {
    loginWrap,
    logoutWrap,
    makeInitialRequestWrap,
    getAuthData,
    isInitialDataLoaded
  }
}

function initialize (apiService, newConfig, newRouteFunction?) {
  coAuther = CoAuther(apiService)
  if (newConfig.authData) {
    config.AUTH_DATA = newConfig.authData
  }
  // If someone set the value specifically
  if (newConfig.dontTouchLocalStorage === false || true) {
    config.dontTouchLocalStorage = newConfig.dontTouchLocalStorage
  }
  if (newConfig.routes) {
    if (newConfig.routes.loggedIn) {
      config.LOGGED_IN = newConfig.routes.loggedIn
    }
    if (newConfig.routes.authenticate) {
      config.AUTHENTICATE = newConfig.routes.authenticate
    }
    if (newConfig.routes.initialRequest) {
      config.INITIAL_REQUEST = newConfig.routes.initialRequest
    }
  }
  if (newRouteFunction) {
    routeFunction = newRouteFunction
  }
}

function clearAuthData () {
  if (!config.dontTouchLocalStorage) {
    localStorage.removeItem(config.AUTH_DATA)
  }
}

function getAuthData () {
  return localStorage.getItem(config.AUTH_DATA)
}

function setAuthData (authData) {
  if (!config.dontTouchLocalStorage) {
    localStorage.setItem(config.AUTH_DATA, authData);
  }
}

export {
  initialize,
  getCoAuther,
  activationHelper,
  setTerminal
}
