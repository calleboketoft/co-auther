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
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtYmFzaWMvY29tcG9uZW50cy9hcHAtY21wLnRzIl0sIm5hbWVzIjpbIkFwcENtcCIsIkFwcENtcC5jb25zdHJ1Y3RvciIsIkFwcENtcC5sb2dPdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVU7QUFDVixxQkFBMEIsZUFDMUIsQ0FBQyxDQUR3QztBQUN6Qyx1QkFBdUQsaUJBR3ZELENBQUMsQ0FIdUU7QUFFeEUsUUFBUTtBQUNSLGlDQUFnQyxvQkFDaEMsQ0FBQyxDQURtRDtBQUNwRCxvQ0FBa0MsdUJBQ2xDLENBQUMsQ0FEd0Q7QUFDekQsOEJBQTRCLGlCQUc1QixDQUFDLENBSDRDO0FBRTdDLGtDQUFrQztBQUNsQyw0QkFBdUIsa0NBQ3ZCLENBQUMsQ0FEd0Q7QUFDekQsSUFBWSxRQUFRLFdBQU0sMkJBRTFCLENBQUMsQ0FGb0Q7QUFFckQ7SUFxQkVBLGdCQUFxQkEsTUFBY0E7UUFyQnJDQyxpQkFzQ0NBO1FBakJzQkEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7UUFDakNBLHlEQUF5REE7UUFDekRBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLHFCQUFVQSxFQUFFQTtZQUM5QkEsTUFBTUEsRUFBRUE7Z0JBQ05BLFFBQVFBLEVBQUVBLFVBQVVBO2dCQUNwQkEsWUFBWUEsRUFBRUEsY0FBY0E7Z0JBQzVCQSxjQUFjQSxFQUFFQSxnQkFBZ0JBO2FBQ2pDQTtZQUNEQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsRUFBRUEsVUFBQ0EsU0FBU0E7WUFDWEEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDekNBLENBQUNBLENBQUNBLENBQUFBO0lBQ0pBLENBQUNBO0lBRURELHVCQUFNQSxHQUFOQTtRQUNFRSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFBQTtJQUNyQ0EsQ0FBQ0E7SUFyQ0hGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxRQUFRQSxFQUFFQSwyY0FVVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUVBLEVBQUVBLEVBQUVBLGNBQWNBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFlQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTtZQUM3RkEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsMkJBQVdBLEVBQUVBO1lBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBLEVBQUVBLEVBQUVBLGdCQUFnQkEsRUFBRUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFFQTtTQUNoRkEsQ0FBQ0E7O2VBbUJEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtBQWxCWSxjQUFNLFNBa0JsQixDQUFBIiwiZmlsZSI6ImV4YW1wbGUtYmFzaWMvY29tcG9uZW50cy9hcHAtY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xuXG4vLyBQYWdlc1xuaW1wb3J0IHsgQXV0aGVudGljYXRlQ21wIH0gZnJvbSAnLi9hdXRoZW50aWNhdGUtY21wJ1xuaW1wb3J0IHsgSW5pdGlhbFJlcXVlc3RDbXAgfSBmcm9tICcuL2luaXRpYWwtcmVxdWVzdC1jbXAnXG5pbXBvcnQgeyBMb2dnZWRJbkNtcCB9IGZyb20gJy4vbG9nZ2VkLWluLWNtcCdcblxuLy8gQVBJIGFuZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlc1xuaW1wb3J0IGFwaVNlcnZpY2UgZnJvbSAnLi4vLi4vZXhhbXBsZS1jb21tb24vYXBpLXNlcnZpY2UnXG5pbXBvcnQgKiBhcyBDb0F1dGhlciBmcm9tICcuLi8uLi9jby1hdXRoZXIvY28tYXV0aGVyJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDMwcHg7XCI+XG4gICAgICA8cCBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiPmNvLWF1dGhlciBkZW1vPC9wPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvQXV0aGVudGljYXRlJ11cIj5BdXRoZW50aWNhdGU8L2E+Jm5ic3A7fCZuYnNwO1xuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvTG9nZ2VkSW4nXVwiPkxvZ2dlZCBJbjwvYT4mbmJzcDt8Jm5ic3A7XG4gICAgICA8YSBbcm91dGVyTGlua109XCJbJy9Jbml0aWFsUmVxdWVzdCddXCI+SW5pdGlhbCBSZXF1ZXN0PC9hPiZuYnNwO3wmbmJzcDtcbiAgICAgIDxhIChjbGljayk9XCJsb2dPdXQoKVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPkxvZyBvdXQ8L2E+XG4gICAgICA8YnI+PGJyPlxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnL2F1dGhlbnRpY2F0ZScsIGFzOiAnQXV0aGVudGljYXRlJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGVDbXAsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvbG9nZ2VkSW4nLCBhczogJ0xvZ2dlZEluJywgY29tcG9uZW50OiBMb2dnZWRJbkNtcCB9LFxuICB7IHBhdGg6ICcvaW5pdGlhbFJlcXVlc3QnLCBhczogJ0luaXRpYWxSZXF1ZXN0JywgY29tcG9uZW50OiBJbml0aWFsUmVxdWVzdENtcCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENtcCB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBhdXRoZXIgaGVyZSwgbm93IGFwaVNlcnZpY2Ugd2lsbCBiZSB3cmFwcGVkXG4gICAgQ29BdXRoZXIuaW5pdGlhbGl6ZShhcGlTZXJ2aWNlLCB7XG4gICAgICByb3V0ZXM6IHtcbiAgICAgICAgbG9nZ2VkSW46ICdMb2dnZWRJbicsXG4gICAgICAgIGF1dGhlbnRpY2F0ZTogJ0F1dGhlbnRpY2F0ZScsXG4gICAgICAgIGluaXRpYWxSZXF1ZXN0OiAnSW5pdGlhbFJlcXVlc3QnXG4gICAgICB9LFxuICAgICAgYXV0aERhdGE6ICdhdXRoRGF0YSdcbiAgICB9LCAocm91dGVQYXRoKSA9PiB7IC8vIFJlZ2lzdGVyIGEgbmV3IHJvdXRpbmcgZnVuY3Rpb25cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyByb3V0ZVBhdGhdKVxuICAgIH0pXG4gIH1cblxuICBsb2dPdXQgKCkge1xuICAgIENvQXV0aGVyLmdldENvQXV0aGVyKCkubG9nb3V0V3JhcCgpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9ub2RlX21vZHVsZXMifQ==
