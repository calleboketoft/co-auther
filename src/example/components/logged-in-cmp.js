var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var co_auther_1 = require('../../co-auther/co-auther');
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp = __decorate([
        angular2_1.Component({
            selector: 'logged-in-cmp',
            template: "Logged in!"
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('loggedIn'); }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
})();
exports.LoggedInCmp = LoggedInCmp;
//# sourceMappingURL=logged-in-cmp.js.map