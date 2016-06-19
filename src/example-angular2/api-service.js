"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Simple mock example of an authentication API service
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ApiService = (function () {
    function ApiService(router) {
        this.router = router;
    }
    ApiService.prototype.login = function () {
        return mockRequest('Authentication', 0);
    };
    ApiService.prototype.logout = function () {
        return mockRequest('Logout', 0);
    };
    ApiService.prototype.makeInitialRequest = function () {
        var _this = this;
        // Here's an example of how to handle errors in the apiService. Since coAuther
        // needs to get the error in the .catch() it's necessary to create a new promise
        // and "rethrow" the error again.
        return new Promise(function (resolve, reject) {
            // Some timeout just to show the loading route.
            return mockRequest('Initial request', 500)
                .then(function (data) {
                console.log('Initial request ok, route to "logged-in"');
                _this.router.navigateByUrl('logged-in');
                resolve(data);
            })
                .catch(function (err) {
                console.log('Initial request failed, route to "authenticate"');
                _this.router.navigate(['authenticate']);
                customErrorHandler(err);
                reject(err);
            });
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
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
    localStorage.removeItem('authData');
    console.log('do amazing stuff with this error:', err);
}
//# sourceMappingURL=api-service.js.map