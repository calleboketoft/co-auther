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
// Angular
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// API and authentication services
var api_service_1 = require('../../example-common/api-service');
var CoAuther = require('../../co-auther/co-auther');
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        CoAuther.initialize(api_service_1.default, {
            routes: {
                loggedIn: 'logged-in',
                authenticate: 'authenticate',
                initialRequest: 'initial-request'
            },
            dontTouchLocalStorage: false,
            authData: 'authData'
        }, function (route) {
            _this.router.navigate(['/' + route]);
        });
    }
    AppComponent.prototype.logOut = function () {
        CoAuther.getCoAuther().logoutWrap().then(function (res) {
            window.location.reload();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <div style='margin: 30px;'>\n      <p style='font-weight: bold;'>co-auther demo</p>\n      <a [routerLink]='[\"/authenticate\"]'>Authenticate</a>&nbsp;|&nbsp;\n      <a [routerLink]='[\"/logged-in\"]'>Logged In</a>&nbsp;|&nbsp;\n      <a [routerLink]='[\"/logged-in/child\"]'>Logged in - Child</a>&nbsp;|&nbsp;\n      <a [routerLink]='[\"/initial-request\"]'>Initial Request</a>&nbsp;|&nbsp;\n      <a (click)='logOut()' style='cursor: pointer;'>Log out</a>\n      <br><br>\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map