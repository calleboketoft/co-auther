"use strict";
var CoAuther = (function () {
    function CoAuther(_a) {
        var apiService = _a.apiService, loggedInRoute = _a.loggedInRoute, authenticateRoute = _a.authenticateRoute, initialRequestRoute = _a.initialRequestRoute, debugMode = _a.debugMode, authDataKey = _a.authDataKey, browserStorageType = _a.browserStorageType;
        // State flags
        this.initialRequestFailed = false;
        this.initialRequestPending = false;
        this.initialDataLoaded = false;
        this.loggedInRoute = 'logged-in';
        this.authenticateRoute = 'authenticate';
        this.initialRequestRoute = 'initial-request';
        this.authDataKey = 'authData';
        this.debugMode = false;
        this.browserStorageType = 'localStorage';
        this.apiService = apiService;
        this.loggedInRoute = loggedInRoute || this.loggedInRoute;
        this.authenticateRoute = authenticateRoute || this.authenticateRoute;
        this.initialRequestRoute = initialRequestRoute || this.initialRequestRoute;
        this.authDataKey = authDataKey || this.authDataKey;
        this.debugMode = debugMode || this.debugMode;
        this.browserStorageType = browserStorageType || this.browserStorageType;
    }
    CoAuther.prototype.loginWrap = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // if initial request failed before, consider this a retry
        this.initialRequestFailed = false;
        return this.apiService.login.apply(this.apiService, args);
    };
    CoAuther.prototype.logoutWrap = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiService.logout.apply(this.apiService, args);
    };
    CoAuther.prototype.makeInitialRequestWrap = function () {
        var _this = this;
        return this.apiService.makeInitialRequest()
            .then(function () {
            _this.initialDataLoaded = true;
            if (_this.debugMode) {
                console.log('[co-auther] initial data marked as loaded');
            }
        });
    };
    CoAuther.prototype.activationHelper = function (routeRequest) {
        var _this = this;
        if (this.debugMode) {
            console.log('[co-auther] routeReq: ' + routeRequest);
        }
        var routeResult = null;
        var authData = window[this.browserStorageType].getItem(this.authDataKey);
        // authData and initialRequest done, suggest LOGGED_IN
        if (authData && this.initialDataLoaded) {
            routeResult = this.loggedInRoute;
        }
        else if (!authData && !this.initialRequestPending) {
            routeResult = this.authenticateRoute;
        }
        else {
            routeResult = this.initialRequestRoute;
            if (!this.initialRequestPending && !this.initialRequestFailed) {
                this.initialRequestPending = true;
                this.makeInitialRequestWrap()
                    .then(function () {
                    // initial request successful, suggest LOGGED_IN
                    _this.initialRequestPending = false;
                    routeResult = _this.loggedInRoute;
                })
                    .catch(function (err) {
                    // initial request failed, suggest AUTHENTICATE
                    _this.initialRequestPending = false;
                    _this.initialRequestFailed = true;
                    routeResult = _this.authenticateRoute;
                });
            }
            else if (this.initialRequestFailed && authData) {
                // error state, when initialRequest fails, you need to clear authData
                console.error('Initial request promise was rejected. You need to clear authData from browser storage.');
            }
        }
        if (this.debugMode) {
            console.log('[co-auther] routeRes: ' + routeResult);
        }
        return routeResult;
    };
    return CoAuther;
}());
exports.CoAuther = CoAuther;
//# sourceMappingURL=co-auther.js.map