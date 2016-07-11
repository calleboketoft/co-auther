/**
 * Example provider for using CoAuther with Angular 2
 **/
"use strict";
var co_auther_1 = require('../../co-auther');
// Project specific api service and route values etc.
var api_service_1 = require('./api.service');
var core_routes_config_1 = require('./core-routes.config');
exports.coAutherProvider = {
    provide: co_auther_1.CoAuther,
    useFactory: coAutherFactory,
    // CoAuther needs an instance of Angular 2 service "ApiService"
    deps: [api_service_1.ApiService]
};
// Factory function for CoAuther, specifying how to instantiate it
function coAutherFactory(apiService) {
    return new co_auther_1.CoAuther({
        apiService: apiService,
        initialRequestRoute: core_routes_config_1.ROUTE_INITIAL_REQUEST,
        authenticateRoute: core_routes_config_1.ROUTE_AUTHENTICATE,
        loggedInRoute: core_routes_config_1.ROUTE_LOGGED_IN,
        authDataKey: 'authData',
        debugMode: true
    });
}
//# sourceMappingURL=co-auther.provider.js.map