"use strict";
var logged_in_component_1 = require('./logged-in.component');
var co_auther_guard_1 = require('../../co-auther.guard');
var logged_in_child_component_1 = require('./logged-in-child.component');
var logged_in_child2_component_1 = require('./logged-in-child2.component');
exports.LoggedInRoutes = [
    {
        path: 'logged-in',
        component: logged_in_component_1.LoggedInComponent,
        canActivate: [co_auther_guard_1.CoAutherGuard],
        // Children are also guarded by canActivate
        children: [
            {
                path: '',
                component: logged_in_child_component_1.LoggedInChildComponent
            },
            {
                path: 'child2/:id',
                component: logged_in_child2_component_1.LoggedInChild2Component
            }
        ]
    }
];
//# sourceMappingURL=logged-in.routes.js.map