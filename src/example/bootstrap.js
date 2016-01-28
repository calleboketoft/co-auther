var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_cmp_1 = require('./components/app-cmp');
browser_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);

//# sourceMappingURL=bootstrap.js.map
