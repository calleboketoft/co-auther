"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/platform/common');
var http_1 = require('angular2/http');
var app_cmp_1 = require('./components/app-cmp');
browser_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy)
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RUFBdUU7QUFDdkUsd0JBQTBCLDJCQUMxQixDQUFDLENBRG9EO0FBQ3JELHFCQUFxQixlQUNyQixDQUFDLENBRG1DO0FBQ3BDLHVCQUFpQyxpQkFDakMsQ0FBQyxDQURpRDtBQUNsRCx1QkFBdUQsMEJBQ3ZELENBQUMsQ0FEZ0Y7QUFDakYscUJBQStCLGVBRS9CLENBQUMsQ0FGNkM7QUFFOUMsd0JBQXVCLHNCQUV2QixDQUFDLENBRjRDO0FBRTdDLG1CQUFTLENBQUMsZ0JBQU0sRUFBRTtJQUNoQix5QkFBZ0I7SUFDaEIscUJBQWM7SUFDZCxXQUFJLENBQUMseUJBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQW9CLENBQUM7Q0FDckQsQ0FBQyxDQUFBIn0=