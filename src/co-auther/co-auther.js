var dontTouchLocalStorage = false;
var coAuther;
var routeFunction = function (afterHash) {
    var loc = window.location;
    window.location.href = loc.protocol + "//" + loc.host + loc.pathname + "#/" + afterHash;
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
        if (!initialRequestPending) {
            initialRequestPending = true;
            getCoAuther().makeInitialRequestWrap().then(function () {
                initialRequestPending = false;
                // initialRequest done, move on to logged in
                return routeFunction(config.LOGGED_IN);
            });
        }
    }
    if (!canActivate) {
        return routeFunction(destinationRoute);
    }
    return canActivate;
}
exports.activationHelper = activationHelper;
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
        apiService.login.apply(apiService, args)
            .then(function (res) {
            // authData has arrived, go make initial request
            setAuthData(res);
            routeFunction(config.INITIAL_REQUEST);
        })
            .catch(function (err) {
            // Login failed, handle
            console.log('login fail');
        });
    }
    function logoutWrap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        apiService.logout.apply(apiService, args)
            .then(function () {
            clearAuthData();
            // Logged out, reload page
            window.location.reload();
        });
    }
    function makeInitialRequestWrap() {
        return new Promise(function (resolve, reject) {
            apiService.makeInitialRequest()
                .then(function () {
                // Flag for intial data
                initialDataLoaded = true;
                resolve();
            })
                .catch(function (error) {
                // TODO handle failed initial request
                clearAuthData();
                reject();
            });
        });
    }
    return {
        makeInitialRequestWrap: makeInitialRequestWrap,
        loginWrap: loginWrap,
        getAuthData: getAuthData,
        logoutWrap: logoutWrap,
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
    var authDataString = localStorage.getItem(config.AUTH_DATA);
    var authData = authDataString ? JSON.parse(authDataString) : null;
    return authData;
}
function setAuthData(res) {
    if (!dontTouchLocalStorage) {
        localStorage.setItem(config.AUTH_DATA, JSON.stringify(res.json()));
    }
}

//# sourceMappingURL=co-auther.js.map
