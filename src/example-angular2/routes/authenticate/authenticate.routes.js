"use strict";
var authenticate_component_1 = require("./authenticate.component");
var core_routes_config_1 = require("../../core-routes.config");
var co_auther_guard_1 = require("../../co-auther.guard");
exports.AuthenticateRoutes = [
    {
        path: core_routes_config_1.ROUTE_AUTHENTICATE,
        component: authenticate_component_1.AuthenticateComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard]
    }
];
//# sourceMappingURL=authenticate.routes.js.map