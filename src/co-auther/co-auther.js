"use strict";
var dontTouchLocalStorage = true;
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
function clearTerminal() {
    terminalRoute = null;
    return true;
}
exports.clearTerminal = clearTerminal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tYXV0aGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY28tYXV0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQTtBQUNoQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUE7QUFDeEIsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUE7QUFDaEMsSUFBSSxRQUFRLENBQUE7QUFDWixzQkFBdUIsU0FBUztJQUM5QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFBO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFNLEdBQUcsQ0FBQyxRQUFRLFVBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxVQUFLLFNBQVcsQ0FBQTtBQUNwRixDQUFDO0FBQ0QscURBQXFEO0FBQ3JELElBQUksYUFBYSxHQUFHLFVBQUMsU0FBUztJQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFBO0FBQ0QsSUFBSSxXQUFXLEdBQUc7SUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSx1Q0FBdUMsQ0FBQTtJQUMvQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsUUFBUSxDQUFBO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBdUpDLG1CQUFXLGVBdkpaO0FBRUQsSUFBSSxNQUFNLEdBQUc7SUFDWCxTQUFTLEVBQUUsVUFBVTtJQUNyQixZQUFZLEVBQUUsY0FBYztJQUM1QixlQUFlLEVBQUUsZ0JBQWdCO0lBQ2pDLFNBQVMsRUFBRSxVQUFVO0NBQ3RCLENBQUE7QUFFRCwwQ0FBMEM7QUFDMUMsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUE7QUFDakMsMEJBQTJCLFdBQVc7SUFDcEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLElBQUksZ0JBQWdCLEdBQUcs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