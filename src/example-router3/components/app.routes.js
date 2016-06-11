"use strict";
var router_1 = require('@angular/router');
var authenticate_routes_1 = require('./authenticate/authenticate.routes');
var initial_request_routes_1 = require('./initial-request/initial-request.routes');
var logged_in_routes_1 = require('./logged-in/logged-in.routes');
var routes = authenticate_routes_1.AuthenticateRoutes.concat(initial_request_routes_1.InitialRequestRoutes, logged_in_routes_1.LoggedInRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map