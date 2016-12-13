"use strict";
var router_1 = require("@angular/router");
var authenticate_routes_1 = require("./authenticate/authenticate.routes");
var initial_request_routes_1 = require("./initial-request/initial-request.routes");
var logged_in_routes_1 = require("./logged-in/logged-in.routes");
var core_routes_config_1 = require("../core-routes.config");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: core_routes_config_1.ROUTE_AUTHENTICATE
    }
].concat(authenticate_routes_1.AuthenticateRoutes, initial_request_routes_1.InitialRequestRoutes, logged_in_routes_1.LoggedInRoutes);
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map