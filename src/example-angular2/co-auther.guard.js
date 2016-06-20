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
var co_auther_1 = require('../../co-auther');
var Observable_1 = require('rxjs/Observable');
var CoAutherGuard = (function () {
    function CoAutherGuard(coAutherNg2, router) {
        this.coAutherNg2 = coAutherNg2;
        this.router = router;
    }
    CoAutherGuard.prototype.canActivate = function (route) {
        // figure out if the requested route can be routed to
        var routeRequest = route.url[0].path;
        var routeResponse = this.coAutherNg2.coAuther.activationHelper(routeRequest);
        var requestOk = routeRequest === routeResponse;
        // NOTE: Perhaps all redirects should be handled from in here?
        // Does routing from within the guard mess something up though?
        if (!requestOk && routeResponse === 'authenticate') {
            this.router.navigateByUrl('authenticate');
        }
        return Observable_1.Observable.from([routeRequest === routeResponse]);
    };
    CoAutherGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [co_auther_1.CoAutherNg2, router_1.Router])
    ], CoAutherGuard);
    return CoAutherGuard;
}());
exports.CoAutherGuard = CoAutherGuard;
//# sourceMappingURL=co-auther.guard.js.map