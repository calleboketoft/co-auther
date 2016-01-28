// Simple example of an authentication API service

let apiService = {
  login () {
    return mockRequest('Authentication', 0)
  },

  logout () {
    return mockRequest('Logout', 0)
  },

  makeInitialRequest () {
    // Some timeout just to show the loading route.
    return mockRequest('Initial request', 1000)
  }
}

function mockRequest (requestType, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (confirm(requestType + ' success?')) {
        resolve({
          json: () => {
            return { authData: 'yep' }
          }
        })
      } else {
        reject(requestType + ' failed')
      }
    }, timeout)
  })
}

export default apiService