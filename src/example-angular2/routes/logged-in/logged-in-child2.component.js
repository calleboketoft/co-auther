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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoggedInChild2Component = (function () {
    function LoggedInChild2Component(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    LoggedInChild2Component.prototype.ngOnInit = function () {
        // Path params
        // -----------
        // Reactive way of getting params
        this.route$ = this.activatedRoute.params.subscribe(function (params) {
            console.log('Reactive: ' + params['id']);
        });
        // Static way of getting params, no need to unsubscribe
        var param = +this.activatedRoute.snapshot.params['id'];
        console.log('Static: ' + param);
        // Query params
        // ------------
        this.routeQuery$ = this.activatedRoute
            .queryParams
            .subscribe(function (params) {
            console.log('Query: ' + params['name'] + ', ' + params['food']);
        });
    };
    LoggedInChild2Component.prototype.ngOnDestroy = function () {
        this.route$.unsubscribe();
    };
    return LoggedInChild2Component;
}());
LoggedInChild2Component = __decorate([
    core_1.Component({
        selector: 'logged-in-child2',
        template: "Child2"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], LoggedInChild2Component);
exports.LoggedInChild2Component = LoggedInChild2Component;
//# sourceMappingURL=logged-in-child2.component.js.map