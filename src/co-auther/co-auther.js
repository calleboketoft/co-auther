"use strict";
var dontTouchLocalStorage = false;
var terminalRoute = null;
var initialRequestFailed = false;
var coAuther;
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
var config = {
    LOGGED_IN: 'loggedIn',
    AUTHENTICATE: 'authenticate',
    INITIAL_REQUEST: 'initialRequest',
    AUTH_DATA: 'authData'
};
// Determine if a route canActivate or not
var initialRequestPending = false;
function activationHelper(currentPage) {
    var canActivate = false;
    var destinationRoute = null;
    var authData = getCoAuther().getAuthData();
    var initialDataLoaded = getCoAuther().isInitialDataLoaded();
    if (authData && initialDataLoaded) {
        // authData and initialRequest done, you are logged in
        destinationRoute = config.LOGGED_IN;
        canActivate = currentPage === destinationRoute;
    }
    else if (!authData) {
        destinationRoute = config.AUTHENTICATE;
        canActivate = currentPage === destinationRoute;
    }
    else {
        destinationRoute = config.INITIAL_REQUEST;
        canActivate = currentPage === destinationRoute;
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
                .catch(function () {
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
        return routeFunction(destinationRoute);
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
    if (newConfig.dontTouchLocalStorage) {
        dontTouchLocalStorage = true;
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
    if (!dontTouchLocalStorage) {
        localStorage.removeItem(config.AUTH_DATA);
    }
}
function getAuthData() {
    return localStorage.getItem(config.AUTH_DATA);
}
function setAuthData(authData) {
    if (!dontTouchLocalStorage) {
        localStorage.setItem(config.AUTH_DATA, authData);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tYXV0aGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY28tYXV0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLHFCQUFxQixHQUFHLEtBQUssQ0FBQTtBQUNqQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUE7QUFDeEIsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUE7QUFDaEMsSUFBSSxRQUFRLENBQUE7QUFDWixzQkFBdUIsU0FBUztJQUM5QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFBO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFNLEdBQUcsQ0FBQyxRQUFRLFVBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxVQUFLLFNBQVcsQ0FBQTtBQUNwRixDQUFDO0FBQ0QscURBQXFEO0FBQ3JELElBQUksYUFBYSxHQUFHLFVBQUMsU0FBUztJQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFBO0FBQ0QsSUFBSSxXQUFXLEdBQUc7SUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSx1Q0FBdUMsQ0FBQTtJQUMvQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsUUFBUSxDQUFBO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBbUpDLG1CQUFXLGVBbkpaO0FBRUQsSUFBSSxNQUFNLEdBQUc7SUFDWCxTQUFTLEVBQUUsVUFBVTtJQUNyQixZQUFZLEVBQUUsY0FBYztJQUM1QixlQUFlLEVBQUUsZ0JBQWdCO0lBQ2pDLFNBQVMsRUFBRSxVQUFVO0NBQ3RCLENBQUE7QUFFRCwwQ0FBMEM7QUFDMUMsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUE7QUFDakMsMEJBQTJCLFdBQVc7SUFDcEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLElBQUksZ0JBQWdCLEdBQUcs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