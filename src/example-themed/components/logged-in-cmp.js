"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var co_auther_1 = require('../../co-auther/co-auther');
var dashboard_cmp_1 = require('./logged-in-pages/dashboard-cmp');
var settings_cmp_1 = require('./logged-in-pages/settings-cmp');
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp.prototype.logout = function ($event) {
        $event.preventDefault();
        co_auther_1.getCoAuther().logoutWrap();
    };
    LoggedInCmp = __decorate([
        router_2.RouteConfig([
            { path: '/dashboard', as: 'Dashboard', component: dashboard_cmp_1.DashboardCmp, useAsDefault: true },
            { path: '/settings', as: 'Settings', component: settings_cmp_1.SettingsCmp }
        ]),
        core_1.Component({
            selector: 'logged-in-cmp',
            directives: [router_2.ROUTER_DIRECTIVES],
            template: "\n    <nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a class=\"nav-item nav-link\" href=\"#\" (click)=\"logout($event)\">Logout</a>\n        </nav>\n        <form class=\"pull-xs-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a [routerLink]=\"['/LoggedIn/Dashboard']\">Dashboard<span class=\"sr-only\">(current)</span></a></li>\n            <li><a [routerLink]=\"['/LoggedIn/Settings']\">Settings</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a href=\"\">Dummy item 1</a></li>\n            <li><a href=\"\">Dummy item 2</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  "
        }),
        router_1.CanActivate(function () {
            return co_auther_1.activationHelper('LoggedIn');
        }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
}());
exports.LoggedInCmp = LoggedInCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLHVCQUEwQixpQkFDMUIsQ0FBQyxDQUQwQztBQUMzQyx1QkFBNkMsaUJBQzdDLENBQUMsQ0FENkQ7QUFDOUQsMEJBQTRDLDJCQUM1QyxDQUFDLENBRHNFO0FBQ3ZFLDhCQUEyQixpQ0FDM0IsQ0FBQyxDQUQyRDtBQUM1RCw2QkFBMEIsZ0NBRTFCLENBQUMsQ0FGeUQ7QUFrRDFEO0lBQUE7SUFLQSxDQUFDO0lBSkMsNEJBQU0sR0FBTixVQUFRLE1BQU07UUFDWixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdkIsdUJBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFwREg7UUFBQyxvQkFBVyxDQUFDO1lBQ1gsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUcsU0FBUyxFQUFFLDRCQUFZLEVBQUksWUFBWSxFQUFFLElBQUksRUFBQztZQUN0RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUksRUFBRSxFQUFFLFVBQVUsRUFBSSxTQUFTLEVBQUUsMEJBQVcsRUFBQztTQUNoRSxDQUFDO1FBQ0QsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFFBQVEsRUFBRSx3akRBb0NUO1NBQ0YsQ0FBQztRQUNELG9CQUFXLENBQUM7WUFDWCxNQUFNLENBQUMsNEJBQWdCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUFDOzttQkFBQTtJQU1GLGtCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxtQkFBVyxjQUt2QixDQUFBIn0=