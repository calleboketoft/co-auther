require('reflect-metadata');
require('zone.js');
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_cmp_1 = require('./components/app-cmp');
angular2_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map