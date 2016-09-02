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
var core_routes_config_1 = require('./core-routes.config');
var co_auther_guard_1 = require('./co-auther.guard');
var ApiService = (function () {
    function ApiService(router) {
        this.router = router;
    }
    ApiService.prototype.login = function () {
        return new Promise(function (resolve, reject) {
            return mockRequest('Authentication')
                .then(function (data) {
                localStorage.setItem('authData', data);
                resolve(data);
            })
                .catch(function (err) {
                alert('authentication failed');
                reject(err);
            });
        });
    };
    ApiService.prototype.logout = function () {
        return mockRequest('Logout')
            .then(function () {
            localStorage.removeItem('authData');
            window.location.reload();
        });
    };
    ApiService.prototype.makeInitialRequest = function () {
        var _this = this;
        this.router.navigate([core_routes_config_1.ROUTE_INITIAL_REQUEST]);
        // Here's an example of how to handle errors in the apiService. Since coAuther
        // needs to get the error in the .catch() it's necessary to create a new promise
        // and "rethrow" the error again.
        return new Promise(function (resolve, reject) {
            return mockRequest('Initial request', 500)
                .then(function (data) {
                resolve(data);
                console.log('Initial request ok, route to intended route');
                var finalDestination = co_auther_guard_1.memoryStateUrl || core_routes_config_1.ROUTE_LOGGED_IN;
                _this.router.navigateByUrl(finalDestination);
            })
                .catch(function (err) {
                reject(err);
                console.log('Initial request failed, remove authData and route to "authenticate"');
                localStorage.removeItem('authData');
                _this.router.navigateByUrl(core_routes_config_1.ROUTE_AUTHENTICATE);
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
    if (timeout === void 0) { timeout = 0; }
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
//# sourceMappingURL=api.service.js.map