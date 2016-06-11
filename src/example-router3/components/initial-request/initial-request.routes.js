"use strict";
var initial_request_component_1 = require('./initial-request.component');
var co_auther_guard_1 = require('../co-auther.guard');
exports.InitialRequestRoutes = [
    {
        path: '/initial-request',
        component: initial_request_component_1.InitialRequestComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard]
    }
];
//# sourceMappingURL=initial-request.routes.js.map