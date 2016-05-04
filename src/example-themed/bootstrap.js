"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_cmp_1 = require('./components/app-cmp');
platform_browser_dynamic_1.bootstrap(app_cmp_1.AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map