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
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvYXBwLWNtcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiLCJBcHBDbXAubG9nT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ1YscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMsdUJBQXFELGlCQUdyRCxDQUFDLENBSHFFO0FBRXRFLFFBQVE7QUFDUixpQ0FBOEIsb0JBQzlCLENBQUMsQ0FEaUQ7QUFDbEQsb0NBQWdDLHVCQUNoQyxDQUFDLENBRHNEO0FBQ3ZELDhCQUEwQixpQkFHMUIsQ0FBQyxDQUgwQztBQUUzQyxrQ0FBa0M7QUFDbEMsNEJBQXVCLGtDQUN2QixDQUFDLENBRHdEO0FBQ3pELElBQVksUUFBUSxXQUFNLDJCQUUxQixDQUFDLENBRm9EO0FBRXJEO0lBV0VBLGdCQUFxQkEsTUFBY0E7UUFYckNDLGlCQTRCQ0E7UUFqQnNCQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtRQUNqQ0EseURBQXlEQTtRQUN6REEsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EscUJBQVVBLEVBQUVBO1lBQzlCQSxNQUFNQSxFQUFFQTtnQkFDTkEsUUFBUUEsRUFBRUEsVUFBVUE7Z0JBQ3BCQSxZQUFZQSxFQUFFQSxjQUFjQTtnQkFDNUJBLGNBQWNBLEVBQUVBLGdCQUFnQkE7YUFDakNBO1lBQ0RBLFFBQVFBLEVBQUVBLFVBQVVBO1NBQ3JCQSxFQUFFQSxVQUFDQSxTQUFTQTtZQUNYQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUN6Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7SUFDSkEsQ0FBQ0E7SUFFREQsdUJBQU1BLEdBQU5BO1FBQ0VFLFFBQVFBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLENBQUFBO0lBQ3JDQSxDQUFDQTtJQTNCSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLGlDQUFpQ0E7WUFDM0NBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFDQSxJQUFJQSxFQUFFQSxlQUFlQSxFQUFLQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFNQSxTQUFTQSxFQUFFQSxrQ0FBZUEsRUFBSUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7WUFDcEdBLEVBQUNBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUtBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQVVBLFNBQVNBLEVBQUVBLDJCQUFXQSxFQUFDQTtZQUMxRUEsRUFBQ0EsSUFBSUEsRUFBRUEsaUJBQWlCQSxFQUFHQSxFQUFFQSxFQUFFQSxnQkFBZ0JBLEVBQUlBLFNBQVNBLEVBQUVBLHVDQUFpQkEsRUFBQ0E7U0FDakZBLENBQUNBOztlQW1CREE7SUFBREEsYUFBQ0E7QUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7QUFsQlksY0FBTSxTQWtCbEIsQ0FBQSIsImZpbGUiOiJleGFtcGxlLXRoZW1lZC9jb21wb25lbnRzL2FwcC1jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcblxuLy8gUGFnZXNcbmltcG9ydCB7QXV0aGVudGljYXRlQ21wfSBmcm9tICcuL2F1dGhlbnRpY2F0ZS1jbXAnXG5pbXBvcnQge0luaXRpYWxSZXF1ZXN0Q21wfSBmcm9tICcuL2luaXRpYWwtcmVxdWVzdC1jbXAnXG5pbXBvcnQge0xvZ2dlZEluQ21wfSBmcm9tICcuL2xvZ2dlZC1pbi1jbXAnXG5cbi8vIEFQSSBhbmQgYXV0aGVudGljYXRpb24gc2VydmljZXNcbmltcG9ydCBhcGlTZXJ2aWNlIGZyb20gJy4uLy4uL2V4YW1wbGUtY29tbW9uL2FwaS1zZXJ2aWNlJ1xuaW1wb3J0ICogYXMgQ29BdXRoZXIgZnJvbSAnLi4vLi4vY28tYXV0aGVyL2NvLWF1dGhlcidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgdGVtcGxhdGU6IGA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnL2F1dGhlbnRpY2F0ZScsICAgIGFzOiAnQXV0aGVudGljYXRlJywgICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRlQ21wLCAgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL2xvZ2dlZEluLy4uLicsICAgIGFzOiAnTG9nZ2VkSW4nLCAgICAgICAgIGNvbXBvbmVudDogTG9nZ2VkSW5DbXB9LFxuICB7cGF0aDogJy9pbml0aWFsUmVxdWVzdCcsICBhczogJ0luaXRpYWxSZXF1ZXN0JywgICBjb21wb25lbnQ6IEluaXRpYWxSZXF1ZXN0Q21wfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIC8vIEluaXRpYWxpemUgYXV0aGVyIGhlcmUsIG5vdyBhcGlTZXJ2aWNlIHdpbGwgYmUgd3JhcHBlZFxuICAgIENvQXV0aGVyLmluaXRpYWxpemUoYXBpU2VydmljZSwge1xuICAgICAgcm91dGVzOiB7XG4gICAgICAgIGxvZ2dlZEluOiAnTG9nZ2VkSW4nLFxuICAgICAgICBhdXRoZW50aWNhdGU6ICdBdXRoZW50aWNhdGUnLFxuICAgICAgICBpbml0aWFsUmVxdWVzdDogJ0luaXRpYWxSZXF1ZXN0J1xuICAgICAgfSxcbiAgICAgIGF1dGhEYXRhOiAnYXV0aERhdGEnXG4gICAgfSwgKHJvdXRlUGF0aCkgPT4geyAvLyBSZWdpc3RlciBhIG5ldyByb3V0aW5nIGZ1bmN0aW9uXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgcm91dGVQYXRoXSlcbiAgICB9KVxuICB9XG5cbiAgbG9nT3V0ICgpIHtcbiAgICBDb0F1dGhlci5nZXRDb0F1dGhlcigpLmxvZ291dFdyYXAoKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
