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
// Angular
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
// Pages
var authenticate_cmp_1 = require('./authenticate-cmp');
var initial_request_cmp_1 = require('./initial-request-cmp');
var logged_in_cmp_1 = require('./logged-in-cmp');
// API and authentication services
var api_service_1 = require('../../example-common/api-service');
var CoAuther = require('../../co-auther/co-auther');
var AppCmp = (function () {
    function AppCmp(router) {
        var _this = this;
        this.router = router;
        // Initialize auther here, now apiService will be wrapped
        CoAuther.initialize(api_service_1.default, {
            routes: {
                loggedIn: 'LoggedIn',
                authenticate: 'Authenticate',
                initialRequest: 'InitialRequest'
            },
            authData: 'authData'
        }, function (routePath) {
            _this.router.navigate(['/' + routePath]);
        });
    }
    AppCmp.prototype.logOut = function () {
        CoAuther.getCoAuther().logoutWrap();
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div style=\"margin: 30px;\">\n      <p style=\"font-weight: bold;\">co-auther demo</p>\n      <a [routerLink]=\"['/Authenticate']\">Authenticate</a>&nbsp;|&nbsp;\n      <a [routerLink]=\"['/LoggedIn']\">Logged In</a>&nbsp;|&nbsp;\n      <a [routerLink]=\"['/InitialRequest']\">Initial Request</a>&nbsp;|&nbsp;\n      <a (click)=\"logOut()\" style=\"cursor: pointer;\">Log out</a>\n      <br><br>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/authenticate', as: 'Authenticate', component: authenticate_cmp_1.AuthenticateCmp, useAsDefault: true },
            { path: '/loggedIn', as: 'LoggedIn', component: logged_in_cmp_1.LoggedInCmp },
            { path: '/initialRequest', as: 'InitialRequest', component: initial_request_cmp_1.InitialRequestCmp }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFVBQVU7QUFDVixxQkFBMEIsZUFDMUIsQ0FBQyxDQUR3QztBQUN6Qyx1QkFBdUQsaUJBR3ZELENBQUMsQ0FIdUU7QUFFeEUsUUFBUTtBQUNSLGlDQUFnQyxvQkFDaEMsQ0FBQyxDQURtRDtBQUNwRCxvQ0FBa0MsdUJBQ2xDLENBQUMsQ0FEd0Q7QUFDekQsOEJBQTRCLGlCQUc1QixDQUFDLENBSDRDO0FBRTdDLGtDQUFrQztBQUNsQyw0QkFBdUIsa0NBQ3ZCLENBQUMsQ0FEd0Q7QUFDekQsSUFBWSxRQUFRLFdBQU0sMkJBRTFCLENBQUMsQ0FGb0Q7QUFzQnJEO0lBQ0UsZ0JBQXFCLE1BQWM7UUFEckMsaUJBa0JDO1FBakJzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLHlEQUF5RDtRQUN6RCxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFVLEVBQUU7WUFDOUIsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixZQUFZLEVBQUUsY0FBYztnQkFDNUIsY0FBYyxFQUFFLGdCQUFnQjthQUNqQztZQUNELFFBQVEsRUFBRSxVQUFVO1NBQ3JCLEVBQUUsVUFBQyxTQUFTO1lBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JDLENBQUM7SUFyQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsMmNBVVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDO1FBQ0Qsb0JBQVcsQ0FBQztZQUNYLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7WUFDN0YsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJCQUFXLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtTQUNoRixDQUFDOztjQUFBO0lBbUJGLGFBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGNBQU0sU0FrQmxCLENBQUEifQ==