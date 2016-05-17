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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var CoAuther = require('../../co-auther/co-auther');
var dashboard_cmp_1 = require('./logged-in-pages/dashboard-cmp');
var settings_cmp_1 = require('./logged-in-pages/settings-cmp');
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp.prototype.logout = function () {
        CoAuther.getCoAuther().logoutWrap().then(function () {
            window.location.reload();
        });
    };
    LoggedInCmp = __decorate([
        router_deprecated_2.RouteConfig([
            { path: '/dashboard', as: 'Dashboard', component: dashboard_cmp_1.DashboardCmp, useAsDefault: true },
            { path: '/settings', as: 'Settings', component: settings_cmp_1.SettingsCmp }
        ]),
        core_1.Component({
            selector: 'logged-in-cmp',
            directives: [router_deprecated_2.ROUTER_DIRECTIVES],
            styles: [
                // Logged in main styles
                "\n      .main {\n        padding: 20px;\n      }\n      @media (min-width: 768px) {\n        .main {\n          padding-right: 40px;\n          padding-left: 40px;\n        }\n      }\n      .main .page-header {\n        margin-top: 0;\n      }\n\n      /* Hide for mobile, show later */\n      .sidebar {\n        display: none;\n      }\n      @media (min-width: 768px) {\n        .sidebar {\n          position: fixed;\n          top: 51px;\n          bottom: 0;\n          left: 0;\n          z-index: 1000;\n          display: block;\n          padding: 20px;\n          overflow-x: hidden;\n          overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n          background-color: #f5f5f5;\n          border-right: 1px solid #eee;\n        }\n      }\n    ",
                // Top navbar styles
                "\n      .navbar-fixed-top {\n        border-bottom: 1px solid #E0E0E0;\n        background-color: #ECECEC;\n      }\n\n      .navbar-fixed-top .navbar-brand {\n        color: #5e5e5e;\n      }\n\n      .logout-btn {\n        margin-left: 25px;\n      }\n    ",
                // Sidebar styles
                "\n      .nav-sidebar {\n        margin-right: -21px; /* 20px padding + 1px border */\n        margin-bottom: 20px;\n        margin-left: -20px;\n      }\n      .nav-sidebar > li > a ,\n      .nav-sidebar > li > .link-section-header {\n        padding-right: 20px;\n        padding-left: 20px;\n      }\n      .nav-sidebar > .active > a,\n      .nav-sidebar > .active > a:hover,\n      .nav-sidebar > .active > a:focus {\n        color: #fff;\n        background-color: #428bca;\n      }\n    "
            ],
            template: "\n    <nav class='navbar navbar-dark navbar-fixed-top bg-inverse'>\n      <button type='button' class='navbar-toggler hidden-sm-up' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>\n        <span class='sr-only'>Toggle navigation</span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n      </button>\n      <a class='navbar-brand' href='#'>Project name</a>\n      <div id='navbar'>\n        <nav class='nav navbar-nav pull-xs-right'>\n          <button class='btn btn-primary logout-btn' type='button'\n            (click)='logout($event)'>\n            Logout\n          </button>\n        </nav>\n      </div>\n    </nav>\n\n    <div class='container-fluid'>\n      <div class='row'>\n        <div class='col-sm-3 col-md-2 sidebar'>\n          <ul class='nav nav-sidebar'>\n            <li class='active'>\n              <a [routerLink]='[\"/LoggedIn/Dashboard\"]'>\n                Dashboard\n              </a>\n            </li>\n            <li>\n              <a [routerLink]='[\"/LoggedIn/Settings\"]'>\n                Settings\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  "
        }),
        router_deprecated_1.CanActivate(function () { return CoAuther.activationHelper('LoggedIn'); }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
}());
exports.LoggedInCmp = LoggedInCmp;
//# sourceMappingURL=logged-in-cmp.js.map