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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var co_auther_1 = require('../../co-auther/co-auther');
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp = __decorate([
        core_1.Component({
            selector: 'logged-in-cmp',
            template: "Logged in!"
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('LoggedIn'); }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
}());
exports.LoggedInCmp = LoggedInCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUMxQixDQUFDLENBRHdDO0FBQ3pDLHVCQUE0QixpQkFDNUIsQ0FBQyxDQUQ0QztBQUM3QywwQkFBaUMsMkJBRWpDLENBQUMsQ0FGMkQ7QUFPNUQ7SUFBQTtJQUEyQixDQUFDO0lBTDVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7UUFDRCxvQkFBVyxDQUFDLGNBQU0sT0FBQSw0QkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQzs7bUJBQUE7SUFDckIsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsbUJBQVcsY0FBSSxDQUFBIn0=