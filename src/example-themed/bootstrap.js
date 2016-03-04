"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RUFBdUU7QUFDdkUsd0JBQTBCLDJCQUMxQixDQUFDLENBRG9EO0FBQ3JELHFCQUFxQixlQUNyQixDQUFDLENBRG1DO0FBQ3BDLHVCQUF5RSxpQkFDekUsQ0FBQyxDQUR5RjtBQUMxRixxQkFBK0IsZUFFL0IsQ0FBQyxDQUY2QztBQUU5Qyx3QkFBdUIsc0JBRXZCLENBQUMsQ0FGNEM7QUFFN0MsbUJBQVMsQ0FBQyxnQkFBTSxFQUFFO0lBQ2hCLHlCQUFnQjtJQUNoQixxQkFBYztJQUNkLFdBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBb0IsQ0FBQztDQUNyRCxDQUFDLENBQUEifQ==