// Simple example of an authentication API service

let apiService = {
  login () {
    return mockRequest('Authentication', 0)
  },

  logout () {
    return mockRequest('Logout', 0)
  },

  makeInitialRequest () {
    // Here's an example of how to handle errors in the apiService. Since coAuther
    // needs to get the error in the .catch() it's necessary to create a new promise
    // and "rethrow" the error again.
    return new Promise((resolve, reject) => {
      // Some timeout just to show the loading route.
      return mockRequest('Initial request', 500)
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          customErrorHandler(err)
          reject(err)
        })
    })

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

function customErrorHandler (err) {
  console.log('do amazing stuff with this error:', err)
}

export default apiService