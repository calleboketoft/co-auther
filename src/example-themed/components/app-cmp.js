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
            authData: 'authData',
            dontTouchLocalStorage: false
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
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/authenticate', as: 'Authenticate', component: authenticate_cmp_1.AuthenticateCmp, useAsDefault: true },
            { path: '/loggedIn/...', as: 'LoggedIn', component: logged_in_cmp_1.LoggedInCmp },
            { path: '/initialRequest', as: 'InitialRequest', component: initial_request_cmp_1.InitialRequestCmp }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFVBQVU7QUFDVixxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBcUQsaUJBR3JELENBQUMsQ0FIcUU7QUFFdEUsUUFBUTtBQUNSLGlDQUE4QixvQkFDOUIsQ0FBQyxDQURpRDtBQUNsRCxvQ0FBZ0MsdUJBQ2hDLENBQUMsQ0FEc0Q7QUFDdkQsOEJBQTBCLGlCQUcxQixDQUFDLENBSDBDO0FBRTNDLGtDQUFrQztBQUNsQyw0QkFBdUIsa0NBQ3ZCLENBQUMsQ0FEd0Q7QUFDekQsSUFBWSxRQUFRLFdBQU0sMkJBRTFCLENBQUMsQ0FGb0Q7QUFZckQ7SUFDRSxnQkFBcUIsTUFBYztRQURyQyxpQkFtQkM7UUFsQnNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMseURBQXlEO1FBQ3pELFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQVUsRUFBRTtZQUM5QixNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFlBQVksRUFBRSxjQUFjO2dCQUM1QixjQUFjLEVBQUUsZ0JBQWdCO2FBQ2pDO1lBQ0QsUUFBUSxFQUFFLFVBQVU7WUFDcEIscUJBQXFCLEVBQUUsS0FBSztTQUM3QixFQUFFLFVBQUMsU0FBUztZQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBNUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDO1FBQ0Qsb0JBQVcsQ0FBQztZQUNYLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBSyxFQUFFLEVBQUUsY0FBYyxFQUFNLFNBQVMsRUFBRSxrQ0FBZSxFQUFJLFlBQVksRUFBRSxJQUFJLEVBQUM7WUFDcEcsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFLLEVBQUUsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLDJCQUFXLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUcsRUFBRSxFQUFFLGdCQUFnQixFQUFJLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztTQUNqRixDQUFDOztjQUFBO0lBb0JGLGFBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGNBQU0sU0FtQmxCLENBQUEifQ==