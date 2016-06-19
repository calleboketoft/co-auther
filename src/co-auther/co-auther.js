"use strict";
// config params
var config = {
    LOGGED_IN: 'logged-in',
    AUTHENTICATE: 'authenticate',
    INITIAL_REQUEST: 'initial-request',
    AUTH_DATA_KEY: 'authData'
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
// determine where to route to based on requested route and authentication state
var initialRequestPending = false;
function activationHelper(destinationRequested) {
    var destinationResult = null;
    var authData = localStorage.getItem(config.AUTH_DATA_KEY);
    var initialDataLoaded = getCoAuther().isInitialDataLoaded();
    // authData and initialRequest done, suggest LOGGED_IN
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
                // initial request successful, suggest LOGGED_IN
                initialRequestPending = false;
                destinationResult = config.LOGGED_IN;
            })
                .catch(function (err) {
                // initial request failed, suggest AUTHENTICATE
                initialRequestPending = false;
                initialRequestFailed = true;
                destinationResult = config.AUTHENTICATE;
            });
        }
        else if (initialRequestFailed && authData) {
            // initial request failed, you need to clear authData
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
        // if initial request failed before, consider this a retry
        initialRequestFailed = false;
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
            // flag for initial data
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