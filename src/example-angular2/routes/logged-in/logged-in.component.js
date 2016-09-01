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
var router_1 = require('@angular/router');
var LoggedInComponent = (function () {
    function LoggedInComponent(router) {
        this.router = router;
    }
    LoggedInComponent.prototype.goToChild2 = function () {
        this.router.navigate(['/logged-in/child2', 13], {
            queryParams: {
                name: 'calle',
                food: 'banana'
            }
        });
    };
    LoggedInComponent = __decorate([
        core_1.Component({
            selector: 'logged-in',
            template: "\n    Logged in!<br>\n    <a [routerLink]=\"['/logged-in/child2', 12]\">Child 2, inline link</a>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"goToChild2()\">\n      Child 2, code link\n    </button>\n    <br ><br >\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoggedInComponent);
    return LoggedInComponent;
}());
exports.LoggedInComponent = LoggedInComponent;
//# sourceMappingURL=logged-in.component.js.map