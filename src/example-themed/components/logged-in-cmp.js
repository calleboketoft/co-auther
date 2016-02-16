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
})();
exports.LoggedInCmp = LoggedInCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvbG9nZ2VkLWluLWNtcC50cyJdLCJuYW1lcyI6WyJMb2dnZWRJbkNtcCIsIkxvZ2dlZEluQ21wLmNvbnN0cnVjdG9yIiwiTG9nZ2VkSW5DbXAubG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQTZDLGlCQUM3QyxDQUFDLENBRDZEO0FBQzlELDBCQUE0QywyQkFDNUMsQ0FBQyxDQURzRTtBQUN2RSw4QkFBMkIsaUNBQzNCLENBQUMsQ0FEMkQ7QUFDNUQsNkJBQTBCLGdDQUUxQixDQUFDLENBRnlEO0FBRTFEO0lBQUFBO0lBcURBQyxDQUFDQTtJQUpDRCw0QkFBTUEsR0FBTkEsVUFBUUEsTUFBTUE7UUFDWkUsTUFBTUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQUE7UUFDdkJBLHVCQUFXQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFBQTtJQUM1QkEsQ0FBQ0E7SUFwREhGO1FBQUNBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFDQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFHQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFHQSxTQUFTQSxFQUFFQSw0QkFBWUEsRUFBSUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7WUFDdEZBLEVBQUNBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUlBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUlBLFNBQVNBLEVBQUVBLDBCQUFXQSxFQUFDQTtTQUNoRUEsQ0FBQ0E7UUFDREEsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGVBQWVBO1lBQ3pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO1lBQy9CQSxRQUFRQSxFQUFFQSx3akRBb0NUQTtTQUNGQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsTUFBTUEsQ0FBQ0EsNEJBQWdCQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtRQUNyQ0EsQ0FBQ0EsQ0FBQ0E7O29CQU1EQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0FyREEsQUFxRENBLElBQUE7QUFMWSxtQkFBVyxjQUt2QixDQUFBIiwiZmlsZSI6ImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvbG9nZ2VkLWluLWNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7YWN0aXZhdGlvbkhlbHBlciwgZ2V0Q29BdXRoZXJ9IGZyb20gJy4uLy4uL2NvLWF1dGhlci9jby1hdXRoZXInXG5pbXBvcnQge0Rhc2hib2FyZENtcH0gZnJvbSAnLi9sb2dnZWQtaW4tcGFnZXMvZGFzaGJvYXJkLWNtcCdcbmltcG9ydCB7U2V0dGluZ3NDbXB9IGZyb20gJy4vbG9nZ2VkLWluLXBhZ2VzL3NldHRpbmdzLWNtcCdcblxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvZGFzaGJvYXJkJywgIGFzOiAnRGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkQ21wLCAgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL3NldHRpbmdzJywgICBhczogJ1NldHRpbmdzJywgICBjb21wb25lbnQ6IFNldHRpbmdzQ21wfVxuXSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2dlZC1pbi1jbXAnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWZpeGVkLXRvcCBiZy1pbnZlcnNlXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGhpZGRlbi1zbS11cFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+UHJvamVjdCBuYW1lPC9hPlxuICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2IG5hdmJhci1uYXYgcHVsbC14cy1sZWZ0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGhyZWY9XCIjXCIgKGNsaWNrKT1cImxvZ291dCgkZXZlbnQpXCI+TG9nb3V0PC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJwdWxsLXhzLXJpZ2h0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1tZC0yIHNpZGViYXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL0xvZ2dlZEluL0Rhc2hib2FyZCddXCI+RGFzaGJvYXJkPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL0xvZ2dlZEluL1NldHRpbmdzJ11cIj5TZXR0aW5nczwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1zaWRlYmFyXCI+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkR1bW15IGl0ZW0gMTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5EdW1teSBpdGVtIDI8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC1zbS1vZmZzZXQtMyBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0yIG1haW5cIj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5AQ2FuQWN0aXZhdGUoKCkgPT4ge1xuICByZXR1cm4gYWN0aXZhdGlvbkhlbHBlcignTG9nZ2VkSW4nKVxufSlcbmV4cG9ydCBjbGFzcyBMb2dnZWRJbkNtcCB7XG4gIGxvZ291dCAoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBnZXRDb0F1dGhlcigpLmxvZ291dFdyYXAoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
