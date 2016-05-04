// Simple example of an authentication API service
"use strict";
var apiService = {
    login: function () {
        return mockRequest('Authentication', 0);
    },
    logout: function () {
        return mockRequest('Logout', 0);
    },
    makeInitialRequest: function () {
        // Here's an example of how to handle errors in the apiService. Since coAuther
        // needs to get the error in the .catch() it's necessary to create a new promise
        // and "rethrow" the error again.
        return new Promise(function (resolve, reject) {
            // Some timeout just to show the loading route.
            return mockRequest('Initial request', 500)
                .then(function (data) {
                resolve(data);
            })
                .catch(function (err) {
                customErrorHandler(err);
                reject(err);
            });
        });
    }
};
function mockRequest(requestType, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (confirm(requestType + ' success?')) {
                resolve('authDataHere');
            }
            else {
                reject(requestType + ' failed');
            }
        }, timeout);
    });
}
function customErrorHandler(err) {
    console.log('do amazing stuff with this error:', err);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = apiService;
//# sourceMappingURL=api-service.js.map