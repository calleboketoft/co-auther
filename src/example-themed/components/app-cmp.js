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
    function AppCmp() {
        // Initialize auther here, now apiService will be wrapped
        CoAuther.initialize(api_service_1.default, {
            routes: {
                loggedIn: 'loggedIn',
                authenticate: 'authenticate',
                initialRequest: 'initialRequest'
            },
            authData: 'authData'
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
            { path: '/authenticate', as: 'Authenticate', component: authenticate_cmp_1.AuthenticateCmp },
            { path: '/loggedIn', as: 'LoggedIn', component: logged_in_cmp_1.LoggedInCmp },
            { path: '/initialRequest', as: 'InitialRequest', component: initial_request_cmp_1.InitialRequestCmp }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=app-cmp.js.map
