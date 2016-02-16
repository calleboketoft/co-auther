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
var AuthenticateCmp = (function () {
    function AuthenticateCmp() {
    }
    AuthenticateCmp.prototype.login = function (username, password) {
        co_auther_1.getCoAuther().loginWrap(username, password);
    };
    AuthenticateCmp = __decorate([
        core_1.Component({
            selector: 'authenticate-cmp',
            template: "\n    <label>Username<input #username type=\"text\"></label><br>\n    <label>Password<input #password type=\"password\"></label><br>\n    <button (click)=\"login(username.value, password.value)\">Login</button>\n  "
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('Authenticate'); }), 
        __metadata('design:paramtypes', [])
    ], AuthenticateCmp);
    return AuthenticateCmp;
})();
exports.AuthenticateCmp = AuthenticateCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtYmFzaWMvY29tcG9uZW50cy9hdXRoZW50aWNhdGUtY21wLnRzIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0ZUNtcCIsIkF1dGhlbnRpY2F0ZUNtcC5jb25zdHJ1Y3RvciIsIkF1dGhlbnRpY2F0ZUNtcC5sb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQzFCLENBQUMsQ0FEd0M7QUFDekMsdUJBQTRCLGlCQUM1QixDQUFDLENBRDRDO0FBQzdDLDBCQUE4QywyQkFFOUMsQ0FBQyxDQUZ3RTtBQUV6RTtJQUFBQTtJQWFBQyxDQUFDQTtJQUhDRCwrQkFBS0EsR0FBTEEsVUFBT0EsUUFBUUEsRUFBRUEsUUFBUUE7UUFDdkJFLHVCQUFXQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFBQTtJQUM3Q0EsQ0FBQ0E7SUFaSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7WUFDNUJBLFFBQVFBLEVBQUVBLHdOQUlUQTtTQUNGQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0EsY0FBTUEsT0FBQUEsNEJBQWdCQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFoQ0EsQ0FBZ0NBLENBQUNBOzt3QkFLbkRBO0lBQURBLHNCQUFDQTtBQUFEQSxDQWJBLEFBYUNBLElBQUE7QUFKWSx1QkFBZSxrQkFJM0IsQ0FBQSIsImZpbGUiOiJleGFtcGxlLWJhc2ljL2NvbXBvbmVudHMvYXV0aGVudGljYXRlLWNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7IGFjdGl2YXRpb25IZWxwZXIsIGdldENvQXV0aGVyIH0gZnJvbSAnLi4vLi4vY28tYXV0aGVyL2NvLWF1dGhlcidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0aGVudGljYXRlLWNtcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsPlVzZXJuYW1lPGlucHV0ICN1c2VybmFtZSB0eXBlPVwidGV4dFwiPjwvbGFiZWw+PGJyPlxuICAgIDxsYWJlbD5QYXNzd29yZDxpbnB1dCAjcGFzc3dvcmQgdHlwZT1cInBhc3N3b3JkXCI+PC9sYWJlbD48YnI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwibG9naW4odXNlcm5hbWUudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVwiPkxvZ2luPC9idXR0b24+XG4gIGBcbn0pXG5AQ2FuQWN0aXZhdGUoKCkgPT4gYWN0aXZhdGlvbkhlbHBlcignQXV0aGVudGljYXRlJykpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRlQ21wIHtcbiAgbG9naW4gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGdldENvQXV0aGVyKCkubG9naW5XcmFwKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
