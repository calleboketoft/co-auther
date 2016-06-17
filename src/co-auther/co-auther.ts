// Config params
let config = {
  LOGGED_IN: 'logged-in',
  AUTHENTICATE: 'authenticate',
  INITIAL_REQUEST: 'initial-request',
  AUTH_DATA_KEY: 'authData',
  dontTouchLocalStorage: true
}

let initialRequestFailed = false
let coAuther

let getCoAuther = function () {
  if (!coAuther) {
    throw 'CoAuther has not been initialized yet'
  } else {
    return coAuther
  }
}

// Determine where to route to based on authentication state
var initialRequestPending = false
function activationHelper (destinationRequested): boolean {
  let destinationResult = null
  let authData = localStorage.getItem(config.AUTH_DATA_KEY)
  let initialDataLoaded = getCoAuther().isInitialDataLoaded()

  // authData and initialRequest done, you are logged in
  if (authData && initialDataLoaded) {
    destinationResult = config.LOGGED_IN

  // no authData and no initialRequest pending, go to authentication page
  } else if (!authData && !initialRequestPending) {
    destinationResult = config.AUTHENTICATE

  // there is authData, go make initial request
  } else {
    destinationResult = config.INITIAL_REQUEST
    if (!initialRequestPending && !initialRequestFailed) {
      initialRequestPending = true
      getCoAuther().makeInitialRequestWrap()
        .then(() => {
          initialRequestPending = false
          destinationResult = config.LOGGED_IN
        })
        .catch((err) => {
          // initial request failed, clear auth data from login and go to authenticate
          initialRequestPending = false
          initialRequestFailed = true
          destinationResult = config.AUTHENTICATE
        })
    } else if (initialRequestFailed && authData) {
      console.error('Initial request promise was rejected. You have manual authData management and need to clear authData from localStorage manually.')
    }
  }

  return destinationResult
}

function CoAuther (apiService) {
  let initialDataLoaded = false
  function isInitialDataLoaded () {
    return initialDataLoaded
  }

  function loginWrap (...args) {
    initialRequestFailed = false // reset this one
    return apiService.login.apply(apiService, args)
  }

  function logoutWrap (...args) {
    return apiService.logout.apply(apiService, args)
  }

  function makeInitialRequestWrap () {
    return apiService.makeInitialRequest()
      .then(() => {
        // Flag for initial data
        initialDataLoaded = true
      })
  }

  return {
    loginWrap,
    logoutWrap,
    makeInitialRequestWrap,
    isInitialDataLoaded
  }
}

function initialize (apiService, newConfig) {
  coAuther = CoAuther(apiService)
  if (newConfig.authDataKey) {
    config.AUTH_DATA_KEY = newConfig.authDataKey
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
}

export {
  initialize,
  getCoAuther,
  activationHelper
}
