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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var _1 = require("../../");
var Rx_1 = require("rxjs/Rx");
var core_routes_config_1 = require("./core-routes.config");
// Memorize navigation attempt on loading page
exports.memoryStateUrl = '';
var CoAutherGuard = (function () {
    function CoAutherGuard(coAuther, router) {
        this.coAuther = coAuther;
        this.router = router;
    }
    CoAutherGuard.prototype.canActivate = function (route, state) {
        // figure out if the requested route can be routed to
        var routeRequest = route.url[0].path;
        var routeResponse = this.coAuther.activationHelper(routeRequest);
        var requestOk = routeRequest === routeResponse;
        // Memorize where attempting to navigate to when opening page
        // the exported member "memoryStateUrl" will contain destination
        var unauthedLoggedInAttempt = routeRequest === core_routes_config_1.ROUTE_LOGGED_IN && routeResponse === core_routes_config_1.ROUTE_AUTHENTICATE;
        var authedLoggedInAttempt = routeRequest === core_routes_config_1.ROUTE_LOGGED_IN && routeResponse === core_routes_config_1.ROUTE_INITIAL_REQUEST;
        if (unauthedLoggedInAttempt || authedLoggedInAttempt) {
            exports.memoryStateUrl = state.url;
        }
        // NOTE: Perhaps all redirects should be handled from in here?
        // Does routing from within the guard mess something up though?
        if (!requestOk && (routeResponse === core_routes_config_1.ROUTE_AUTHENTICATE)) {
            this.router.navigateByUrl(core_routes_config_1.ROUTE_AUTHENTICATE);
        }
        return Rx_1.Observable.from([routeRequest === routeResponse]);
    };
    return CoAutherGuard;
}());
CoAutherGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [_1.CoAuther,
        router_1.Router])
], CoAutherGuard);
exports.CoAutherGuard = CoAutherGuard;
//# sourceMappingURL=co-auther.guard.js.map