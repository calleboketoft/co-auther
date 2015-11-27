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
var InitialRequestCmp = (function () {
    function InitialRequestCmp() {
    }
    InitialRequestCmp = __decorate([
        angular2_1.Component({
            selector: 'initial-request-cmp',
            template: "Making initial request..."
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('initialRequest'); }), 
        __metadata('design:paramtypes', [])
    ], InitialRequestCmp);
    return InitialRequestCmp;
})();
exports.InitialRequestCmp = InitialRequestCmp;
//# sourceMappingURL=initial-request-cmp.js.map