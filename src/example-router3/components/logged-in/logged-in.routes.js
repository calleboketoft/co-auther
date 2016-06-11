"use strict";
var logged_in_component_1 = require('./logged-in.component');
var co_auther_guard_1 = require('../co-auther.guard');
exports.LoggedInRoutes = [
    {
        path: '/logged-in',
        component: logged_in_component_1.LoggedInComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard]
    }
];
//# sourceMappingURL=logged-in.routes.js.map