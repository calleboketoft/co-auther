"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initial_request_component_1 = require("./initial-request.component");
var core_routes_config_1 = require("../../core-routes.config");
var co_auther_guard_1 = require("../../co-auther.guard");
exports.InitialRequestRoutes = [
    {
        path: core_routes_config_1.ROUTE_INITIAL_REQUEST,
        component: initial_request_component_1.InitialRequestComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard]
    }
];
//# sourceMappingURL=initial-request.routes.js.map