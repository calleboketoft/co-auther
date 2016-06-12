"use strict";
var logged_in_component_1 = require('./logged-in.component');
var co_auther_guard_1 = require('../co-auther.guard');
var logged_in_child_component_1 = require('./logged-in-child.component');
exports.LoggedInRoutes = [
    {
        path: '/logged-in',
        component: logged_in_component_1.LoggedInComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard],
        // Children are also guarded by canActivate
        children: [
            {
                path: '/child',
                component: logged_in_child_component_1.LoggedInChildComponent
            }
        ]
    }
];
//# sourceMappingURL=logged-in.routes.js.map