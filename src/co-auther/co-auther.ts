let dontTouchLocalStorage = false
let terminalRoute = null
let initialRequestFailed = false
let coAuther
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

let config = {
  LOGGED_IN: 'loggedIn',
  AUTHENTICATE: 'authenticate',
  INITIAL_REQUEST: 'initialRequest',
  AUTH_DATA: 'authData'
}

// Determine if a route canActivate or not
var initialRequestPending = false
function activationHelper (currentPage): any {
  let canActivate = false
  let destinationRoute = null
  let authData = getCoAuther().getAuthData()
  let initialDataLoaded = getCoAuther().isInitialDataLoaded()
  if (authData && initialDataLoaded) {
    // authData and initialRequest done, you are logged in
    destinationRoute = config.LOGGED_IN
    canActivate = currentPage === destinationRoute
  } else if (!authData) {
    destinationRoute = config.AUTHENTICATE
    canActivate = currentPage === destinationRoute
  } else {
    destinationRoute = config.INITIAL_REQUEST
    canActivate = currentPage === destinationRoute
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
        .catch(() => {
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
    return routeFunction(destinationRoute)
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

function initialize (apiService, newConfig, newRouteFunction) {
  coAuther = CoAuther(apiService)
  if (newConfig.authData) {
    config.AUTH_DATA = newConfig.authData
  }
  if (newConfig.dontTouchLocalStorage) {
    dontTouchLocalStorage = true
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
  if (!dontTouchLocalStorage) {
    localStorage.removeItem(config.AUTH_DATA)
  }
}

function getAuthData () {
  let authDataString = localStorage.getItem(config.AUTH_DATA)
  let authData = authDataString ? JSON.parse(authDataString) : null
  return authData
}

function setAuthData (res) {
  if (!dontTouchLocalStorage) {
    localStorage.setItem(config.AUTH_DATA, JSON.stringify(res.json()))
  }
}

export {
  initialize,
  getCoAuther,
  activationHelper,
  setTerminal
}
