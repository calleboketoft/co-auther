// config params
let config = {
  LOGGED_IN: 'logged-in',
  AUTHENTICATE: 'authenticate',
  INITIAL_REQUEST: 'initial-request',
  AUTH_DATA_KEY: 'authData'
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

// determine where to route to based on requested route and authentication state
var initialRequestPending = false
function activationHelper (destinationRequested) {
  let destinationResult = null
  let authData = localStorage.getItem(config.AUTH_DATA_KEY)
  let initialDataLoaded = getCoAuther().isInitialDataLoaded()

  // authData and initialRequest done, suggest LOGGED_IN
  if (authData && initialDataLoaded) {
    destinationResult = config.LOGGED_IN

  // no authData and no initialRequest pending, suggest AUTHENTICATE
  } else if (!authData && !initialRequestPending) {
    destinationResult = config.AUTHENTICATE

  // authData is available, suggest INITIAL_REQUEST
  } else {
    destinationResult = config.INITIAL_REQUEST
    if (!initialRequestPending && !initialRequestFailed) {
      initialRequestPending = true
      getCoAuther().makeInitialRequestWrap()
        .then(() => {

          // initial request successful, suggest LOGGED_IN
          initialRequestPending = false
          destinationResult = config.LOGGED_IN
        })
        .catch((err) => {

          // initial request failed, suggest AUTHENTICATE
          initialRequestPending = false
          initialRequestFailed = true
          destinationResult = config.AUTHENTICATE
        })
    } else if (initialRequestFailed && authData) {

      // initial request failed, you need to clear authData
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
    // if initial request failed before, consider this a retry
    initialRequestFailed = false
    return apiService.login.apply(apiService, args)
  }

  function logoutWrap (...args) {
    return apiService.logout.apply(apiService, args)
  }

  function makeInitialRequestWrap () {
    return apiService.makeInitialRequest()
      .then(() => {
        // flag for initial data
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
