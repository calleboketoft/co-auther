// Simple example of an authentication API service
var apiService = {
    login: function () {
        return mockRequest('Authentication', 0);
    },
    logout: function () {
        return mockRequest('Logout', 0);
    },
    makeInitialRequest: function () {
        // Some timeout just to show the loading route.
        return mockRequest('Initial request', 1000);
    }
};
function mockRequest(requestType, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (confirm(requestType + ' success?')) {
                resolve({
                    json: function () {
                        return { authData: 'yep' };
                    }
                });
            }
            else {
                reject(requestType + ' failed');
            }
        }, timeout);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = apiService;

//# sourceMappingURL=api-service.js.map
