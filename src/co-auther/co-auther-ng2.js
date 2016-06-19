// Adaptor for use with Angular 2 to enable dependency injection
// TODO: should probably provide options with provider to make routes etc
// available immediately
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
var co_auther_1 = require('./co-auther');
var CoAutherNg2 = (function () {
    function CoAutherNg2() {
        this.coAuther = new co_auther_1.CoAuther();
    }
    CoAutherNg2.prototype.init = function (options) {
        this.coAuther.init(options);
    };
    CoAutherNg2 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CoAutherNg2);
    return CoAutherNg2;
}());
exports.CoAutherNg2 = CoAutherNg2;
//# sourceMappingURL=co-auther-ng2.js.map