"use strict";
// Config params
var config = {
    LOGGED_IN: 'loggedIn',
    AUTHENTICATE: 'authenticate',
    INITIAL_REQUEST: 'initialRequest',
    AUTH_DATA: 'authData',
    dontTouchLocalStorage: true
};
var terminalRoute = null;
var initialRequestFailed = false;
var coAuther;
// Basic routing function
function basicRouting(afterHash) {
    var loc = window.location;
    window.location.href = loc.protocol + "//" + loc.host + loc.pathname + "#/" + afterHash;
}
// Basic default route function, should be overridden
var routeFunction = function (afterHash) {
    basicRouting(afterHash);
};
var getCoAuther = function () {
    if (!coAuther) {
        throw 'CoAuther has not been initialized yet';
    }
    else {
        return coAuther;
    }
};
exports.getCoAuther = getCoAuther;
// Determine if a route canActivate or not
var initialRequestPending = false;
function activationHelper(destinationRequested) {
    var canActivate = false;
    var destinationResult = null;
    var authData = getCoAuther().getAuthData();
    var initialDataLoaded = getCoAuther().isInitialDataLoaded();
    // authData and initialRequest done, you are logged in
    if (authData && initialDataLoaded) {
        destinationResult = config.LOGGED_IN;
        canActivate = destinationRequested === destinationResult;
    }
    else if (!authData && !initialRequestPending) {
        destinationResult = config.AUTHENTICATE;
        canActivate = destinationRequested === destinationResult;
    }
    else {
        destinationResult = config.INITIAL_REQUEST;
        canActivate = destinationRequested === destinationResult;
        if (!initialRequestPending && !initialRequestFailed) {
            initialRequestPending = true;
            getCoAuther().makeInitialRequestWrap()
                .then(function () {
                initialRequestPending = false;
                // initialRequest done, move on to logged in
                if (terminalRoute) {
                    return goToTerminal();
                }
                return routeFunction(config.LOGGED_IN);
            })
                .catch(function (err) {
                // initial request failed, clear auth data from login and go to authenticate
                initialRequestPending = false;
                initialRequestFailed = true;
                clearAuthData();
                return routeFunction(config.AUTHENTICATE);
            });
        }
        else if (initialRequestFailed && authData) {
            console.error('Initial request promise was rejected. You have manual authData management and need to clear authData from localStorage manually.');
        }
    }
    if (!canActivate) {
        routeFunction(destinationResult);
        return canActivate;
    }
    return canActivate;
}
exports.activationHelper = activationHelper;
// terminal memory
function setTerminal() {
    terminalRoute = window.location.hash.substring(2);
    return true;
}
exports.setTerminal = setTerminal;
function goToTerminal() {
    basicRouting(terminalRoute);
}
function CoAuther(apiService) {
    var initialDataLoaded = false;
    function isInitialDataLoaded() {
        return initialDataLoaded;
    }
    var initialRequestRes;
    function loginWrap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        initialRequestFailed = false; // reset this one
        return apiService.login.apply(apiService, args)
            .then(function (res) {
            // authData has arrived, go make initial request
            setAuthData(res);
            routeFunction(config.INITIAL_REQUEST);
        });
    }
    function logoutWrap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return apiService.logout.apply(apiService, args)
            .then(function () {
            clearAuthData();
        });
    }
    function makeInitialRequestWrap() {
        return apiService.makeInitialRequest()
            .then(function (data) {
            // Flag for intial data
            initialDataLoaded = true;
        });
    }
    return {
        loginWrap: loginWrap,
        logoutWrap: logoutWrap,
        makeInitialRequestWrap: makeInitialRequestWrap,
        getAuthData: getAuthData,
        isInitialDataLoaded: isInitialDataLoaded
    };
}
function initialize(apiService, newConfig, newRouteFunction) {
    coAuther = CoAuther(apiService);
    if (newConfig.authData) {
        config.AUTH_DATA = newConfig.authData;
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
    if (newRouteFunction) {
        routeFunction = newRouteFunction;
    }
}
exports.initialize = initialize;
function clearAuthData() {
    if (!config.dontTouchLocalStorage) {
        localStorage.removeItem(config.AUTH_DATA);
    }
}
function getAuthData() {
    return localStorage.getItem(config.AUTH_DATA);
}
function setAuthData(authData) {
    if (!config.dontTouchLocalStorage) {
        localStorage.setItem(config.AUTH_DATA, authData);
    }
}
//# sourceMappingURL=co-auther.js.map