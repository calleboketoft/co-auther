"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var app_component_1 = require('./components/app.component');
var app_routes_1 = require('./components/app.routes');
var co_auther_provider_1 = require('./co-auther.provider');
var api_service_1 = require('./api.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    {
        provide: common_1.LocationStrategy,
        useClass: common_1.HashLocationStrategy
    },
    api_service_1.ApiService,
    co_auther_provider_1.coAutherProvider // CoAutherGuard needs this
]).catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map