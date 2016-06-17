"use strict";
// Config params
var config = {
    LOGGED_IN: 'logged-in',
    AUTHENTICATE: 'authenticate',
    INITIAL_REQUEST: 'initial-request',
    AUTH_DATA_KEY: 'authData',
    dontTouchLocalStorage: true
};
var initialRequestFailed = false;
var coAuther;
var getCoAuther = function () {
    if (!coAuther) {
        throw 'CoAuther has not been initialized yet';
    }
    else {
        return coAuther;
    }
};
exports.getCoAuther = getCoAuther;
// Determine where to route to based on authentication state
var initialRequestPending = false;
function activationHelper(destinationRequested) {
    var destinationResult = null;
    var authData = localStorage.getItem(config.AUTH_DATA_KEY);
    var initialDataLoaded = getCoAuther().isInitialDataLoaded();
    // authData and initialRequest done, you are logged in
    if (authData && initialDataLoaded) {
        destinationResult = config.LOGGED_IN;
    }
    else if (!authData && !initialRequestPending) {
        destinationResult = config.AUTHENTICATE;
    }
    else {
        destinationResult = config.INITIAL_REQUEST;
        if (!initialRequestPending && !initialRequestFailed) {
            initialRequestPending = true;
            getCoAuther().makeInitialRequestWrap()
                .then(function () {
                initialRequestPending = false;
                destinationResult = config.LOGGED_IN;
            })
                .catch(function (err) {
                // initial request failed, clear auth data from login and go to authenticate
                initialRequestPending = false;
                initialRequestFailed = true;
                destinationResult = config.AUTHENTICATE;
            });
        }
        else if (initialRequestFailed && authData) {
            console.error('Initial request promise was rejected. You have manual authData management and need to clear authData from localStorage manually.');
        }
    }
    return destinationResult;
}
exports.activationHelper = activationHelper;
function CoAuther(apiService) {
    var initialDataLoaded = false;
    function isInitialDataLoaded() {
        return initialDataLoaded;
    }
    function loginWrap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        initialRequestFailed = false; // reset this one
        return apiService.login.apply(apiService, args);
    }
    function logoutWrap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return apiService.logout.apply(apiService, args);
    }
    function makeInitialRequestWrap() {
        return apiService.makeInitialRequest()
            .then(function () {
            // Flag for initial data
            initialDataLoaded = true;
        });
    }
    return {
        loginWrap: loginWrap,
        logoutWrap: logoutWrap,
        makeInitialRequestWrap: makeInitialRequestWrap,
        isInitialDataLoaded: isInitialDataLoaded
    };
}
function initialize(apiService, newConfig) {
    coAuther = CoAuther(apiService);
    if (newConfig.authDataKey) {
        config.AUTH_DATA_KEY = newConfig.authDataKey;
    }
    // If someone set the value specifically
    if (newConfig.dontTouchLocalStorage === false || true) {
        config.dontTouchLocalStorage = newConfig.dontTouchLocalStorage;
    }
    if (newConfig.routes) {
        if (newConfig.routes.loggedIn) {
            config.LOGGED_IN = newConfig.routes.loggedIn;
        }
        if (newConfig.routes.authenticate) {
            config.AUTHENTICATE = newConfig.routes.authenticate;
        }
        if (newConfig.routes.initialRequest) {
            config.INITIAL_REQUEST = newConfig.routes.initialRequest;
        }
    }
}
exports.initialize = initialize;
//# sourceMappingURL=co-auther.js.map