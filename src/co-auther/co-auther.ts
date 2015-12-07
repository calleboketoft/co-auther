let dontTouchLocalStorage = false
let coAuther
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
function activationHelper (currentPage) {
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
    getCoAuther().makeInitialRequestWrap().then(() => {
      // initialRequest done, move on to logged in
      routeTo(config.LOGGED_IN)
    })
  }
  if (!canActivate) {
    routeTo(destinationRoute)
  }
  return canActivate
}

// TODO this should be replaced with the "correct" routing strategy
function routeTo (afterHash) {
  let loc = window.location
  window.location.href = `${loc.protocol}//${loc.host}${loc.pathname}#/${afterHash}`
}

function CoAuther (apiService) {
  let initialDataLoaded = false
  function isInitialDataLoaded () {
    return initialDataLoaded
  }
  let initialRequestRes

  function loginWrap (...args) {
    apiService.login.apply(apiService, args)
      .then((res) => {
        // authData has arrived, go make initial request
        setAuthData(res)
        routeTo(config.INITIAL_REQUEST)
      })
      .catch((err) => {
        // Login failed, handle
        console.log('login fail')
      })
  }

  function logoutWrap (...args) {
    clearAuthData()
    apiService.logout.apply(apiService, args)
      .then(() => {
        // Logged out, reload page
        window.location.reload()
      })
  }

  function makeInitialRequestWrap () {
    return new Promise ((resolve, reject) => {
      apiService.makeInitialRequest()
        .then(() => {
          // Flag for intial data
          initialDataLoaded = true
          resolve()
        })
        .catch((error) => {
          // TODO handle failed initial request
          clearAuthData()
          reject()
        })
    })
  }

  return {
    makeInitialRequestWrap,
    loginWrap,
    getAuthData,
    logoutWrap,
    isInitialDataLoaded
  }
}

function initialize (apiService, newConfig) {
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
}

function clearAuthData () {
  if (!dontTouchLocalStorage) {
    localStorage.removeItem(config.AUTH_DATA)
  }
}

function getAuthData () {
  return localStorage.getItem(config.AUTH_DATA)
}

function setAuthData (res) {
  if (!dontTouchLocalStorage) {
    localStorage.setItem(config.AUTH_DATA, res)
  }
}

export {
  initialize,
  getCoAuther,
  activationHelper
}
