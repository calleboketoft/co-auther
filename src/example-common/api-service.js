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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7O0FBRWxELElBQUksVUFBVSxHQUFHO0lBQ2YsS0FBSztRQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLDhFQUE4RTtRQUM5RSxnRkFBZ0Y7UUFDaEYsaUNBQWlDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLCtDQUErQztZQUMvQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQztpQkFDdkMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDVCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFBO0FBRUQscUJBQXNCLFdBQVcsRUFBRSxPQUFPO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFVBQVUsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUE7WUFDakMsQ0FBQztRQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNiLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELDRCQUE2QixHQUFHO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDdkQsQ0FBQztBQUVEO2tCQUFlLFVBQVUsQ0FBQSJ9