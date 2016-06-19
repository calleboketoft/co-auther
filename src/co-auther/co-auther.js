"use strict";
var CoAuther = (function () {
    function CoAuther(loggedInRoute, authenticateRoute, initialRequestRoute, authDataKey, debugMode) {
        if (loggedInRoute === void 0) { loggedInRoute = 'logged-in'; }
        if (authenticateRoute === void 0) { authenticateRoute = 'authenticate'; }
        if (initialRequestRoute === void 0) { initialRequestRoute = 'initial-request'; }
        if (authDataKey === void 0) { authDataKey = 'authData'; }
        if (debugMode === void 0) { debugMode = false; }
        this.loggedInRoute = loggedInRoute;
        this.authenticateRoute = authenticateRoute;
        this.initialRequestRoute = initialRequestRoute;
        this.authDataKey = authDataKey;
        this.debugMode = debugMode;
        this.initialRequestFailed = false;
        this.initialRequestPending = false;
        this.initialDataLoaded = false;
    }
    // set options after constructor (for angular 2 reasons)
    CoAuther.prototype.init = function (options) {
        this.apiService = options.apiService;
        this.loggedInRoute = options.loggedInRoute || this.loggedInRoute;
        this.authenticateRoute = options.authenticateRoute || this.authenticateRoute;
        this.initialRequestRoute = options.initialRequestRoute || this.initialRequestRoute;
        this.authDataKey = options.authDataKey || this.authDataKey;
        this.debugMode = options.debugMode || this.debugMode;
    };
    CoAuther.prototype.loginWrap = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        // if initial request failed before, consider this a retry
        this.initialRequestFailed = false;
        return this.apiService.login.apply(this.apiService, args);
    };
    CoAuther.prototype.logoutWrap = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.apiService.logout.apply(this.apiService, args);
    };
    CoAuther.prototype.makeInitialRequestWrap = function () {
        var _this = this;
        return this.apiService.makeInitialRequest()
            .then(function () {
            // flag for initial data
            _this.initialDataLoaded = true;
        });
    };
    CoAuther.prototype.activationHelper = function (destinationRequested) {
        var _this = this;
        var destinationResult = null;
        var authData = localStorage.getItem(this.authDataKey);
        // authData and initialRequest done, suggest LOGGED_IN
        if (authData && this.initialDataLoaded) {
            destinationResult = this.loggedInRoute;
        }
        else if (!authData && !this.initialRequestPending) {
            destinationResult = this.authenticateRoute;
        }
        else {
            destinationResult = this.initialRequestRoute;
            if (!this.initialRequestPending && !this.initialRequestFailed) {
                this.initialRequestPending = true;
                this.makeInitialRequestWrap()
                    .then(function () {
                    // initial request successful, suggest LOGGED_IN
                    _this.initialRequestPending = false;
                    destinationResult = _this.loggedInRoute;
                })
                    .catch(function (err) {
                    // initial request failed, suggest AUTHENTICATE
                    _this.initialRequestPending = false;
                    _this.initialRequestFailed = true;
                    destinationResult = _this.authenticateRoute;
                });
            }
            else if (this.initialRequestFailed && authData) {
                // initial request failed, you need to clear authData
                console.error('Initial request promise was rejected. You have manual authData management and need to clear authData from localStorage manually.');
            }
        }
        if (this.debugMode) {
            console.log('[co-auther] destinationRequested: ' + destinationRequested);
            console.log('[co-auther] destinationResult: ' + destinationResult);
        }
        return destinationResult;
    };
    return CoAuther;
}());
exports.CoAuther = CoAuther;
//# sourceMappingURL=co-auther.js.map