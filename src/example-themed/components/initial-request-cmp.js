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
var InitialRequestCmp = (function () {
    function InitialRequestCmp() {
    }
    InitialRequestCmp = __decorate([
        core_1.Component({
            selector: 'initial-request-cmp',
            template: "Initial request..."
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('InitialRequest'); }), 
        __metadata('design:paramtypes', [])
    ], InitialRequestCmp);
    return InitialRequestCmp;
}());
exports.InitialRequestCmp = InitialRequestCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1yZXF1ZXN0LWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXRpYWwtcmVxdWVzdC1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLHVCQUEwQixpQkFDMUIsQ0FBQyxDQUQwQztBQUMzQywwQkFBK0IsMkJBRS9CLENBQUMsQ0FGeUQ7QUFPMUQ7SUFBQTtJQUFnQyxDQUFDO0lBTGpDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO1FBQ0Qsb0JBQVcsQ0FBQyxjQUFNLE9BQUEsNEJBQWdCLENBQUMsZ0JBQWdCLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQzs7eUJBQUE7SUFDdEIsd0JBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLHlCQUFpQixvQkFBRyxDQUFBIn0=