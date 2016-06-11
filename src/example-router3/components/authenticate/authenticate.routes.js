"use strict";
var authenticate_component_1 = require('./authenticate.component');
var co_auther_guard_1 = require('../co-auther.guard');
exports.AuthenticateRoutes = [
    {
        path: '/authenticate',
        component: authenticate_component_1.AuthenticateComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard]
    }
];
//# sourceMappingURL=authenticate.routes.js.map