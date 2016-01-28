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
var co_auther_1 = require('../../co-auther/co-auther');
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp.prototype.logOut = function ($event) {
        $event.preventDefault();
        co_auther_1.getCoAuther().logoutWrap();
    };
    LoggedInCmp = __decorate([
        core_1.Component({
            selector: 'logged-in-cmp',
            template: "\n    <nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a class=\"nav-item nav-link\" href=\"#\">Dashboard</a>\n          <a class=\"nav-item nav-link\" href=\"#\" (click)=\"logOut($event)\">Logout</a>\n        </nav>\n        <form class=\"pull-xs-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </nav>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a href=\"#\">Reports</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a href=\"\">Nav item again</a></li>\n            <li><a href=\"\">One more nav</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Dashboard</h1>\n        </div>\n      </div>\n    </div>\n  "
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('loggedIn'); }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
})();
exports.LoggedInCmp = LoggedInCmp;

//# sourceMappingURL=logged-in-cmp.js.map
