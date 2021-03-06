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
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
// API and authentication services
var _1 = require("../../../");
var AppComponent = /** @class */ (function () {
    function AppComponent(coAuther) {
        this.coAuther = coAuther;
    }
    AppComponent.prototype.logout = function () {
        this.coAuther.logoutWrap();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div style=\"margin: 30px;\">\n      <p style=\"font-weight: bold;\">co-auther demo</p>\n      <a [routerLink]=\"['/authenticate']\">Authenticate</a>&nbsp;|&nbsp;\n      <a [routerLink]=\"['/logged-in']\">Logged In</a>&nbsp;|&nbsp;\n      <a [routerLink]=\"['/logged-in/child2/', 6]\">Logged in - Child2</a>&nbsp;|&nbsp;\n      <a [routerLink]=\"['/initial-request']\">Initial Request</a>&nbsp;|&nbsp;\n      <a (click)=\"logout()\" style=\"cursor: pointer;\">Log out</a>\n      <br ><br>\n      <router-outlet></router-outlet>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_1.CoAuther])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map