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
        co_auther_1.getCoAuther().loginWrap(username, password)
            .then(function (successMsg) {
            console.log(successMsg);
        })
            .catch(function (errMsg) {
            console.log(errMsg);
        });
    };
    AuthenticateCmp = __decorate([
        core_1.Component({
            selector: 'authenticate-cmp',
            template: "\n    <div class=\"container\">\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input #username type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input #password type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"login(username.value, password.value)\">Sign in</button>\n      </form>\n    </div> <!-- /container -->\n  "
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('Authenticate'); }), 
        __metadata('design:paramtypes', [])
    ], AuthenticateCmp);
    return AuthenticateCmp;
})();
exports.AuthenticateCmp = AuthenticateCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvYXV0aGVudGljYXRlLWNtcC50cyJdLCJuYW1lcyI6WyJBdXRoZW50aWNhdGVDbXAiLCJBdXRoZW50aWNhdGVDbXAuY29uc3RydWN0b3IiLCJBdXRoZW50aWNhdGVDbXAubG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLHVCQUEwQixpQkFDMUIsQ0FBQyxDQUQwQztBQUMzQywwQkFBNEMsMkJBRTVDLENBQUMsQ0FGc0U7QUFFdkU7SUFBQUE7SUErQkFDLENBQUNBO0lBVENELCtCQUFLQSxHQUFMQSxVQUFPQSxRQUFRQSxFQUFFQSxRQUFRQTtRQUN2QkUsdUJBQVdBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBO2FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFDQSxVQUFVQTtZQUNmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtRQUN6QkEsQ0FBQ0EsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsVUFBQ0EsTUFBTUE7WUFDWkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7UUFDckJBLENBQUNBLENBQUNBLENBQUFBO0lBQ05BLENBQUNBO0lBOUJIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsa0JBQWtCQTtZQUM1QkEsUUFBUUEsRUFBRUEsMjNCQWdCVEE7U0FDRkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBLGNBQU1BLE9BQUFBLDRCQUFnQkEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBaENBLENBQWdDQSxDQUFDQTs7d0JBV25EQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0EvQkEsQUErQkNBLElBQUE7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSIsImZpbGUiOiJleGFtcGxlLXRoZW1lZC9jb21wb25lbnRzL2F1dGhlbnRpY2F0ZS1jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7YWN0aXZhdGlvbkhlbHBlciwgZ2V0Q29BdXRoZXJ9IGZyb20gJy4uLy4uL2NvLWF1dGhlci9jby1hdXRoZXInXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dGhlbnRpY2F0ZS1jbXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPlBsZWFzZSBzaWduIGluPC9oMj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzcz1cInNyLW9ubHlcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0ICN1c2VybmFtZSB0eXBlPVwiZW1haWxcIiBpZD1cImlucHV0RW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIGF1dG9mb2N1cz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzcz1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAjcGFzc3dvcmQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInJlbWVtYmVyLW1lXCI+IFJlbWVtYmVyIG1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibG9naW4odXNlcm5hbWUudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVwiPlNpZ24gaW48L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4gPCEtLSAvY29udGFpbmVyIC0tPlxuICBgXG59KVxuQENhbkFjdGl2YXRlKCgpID0+IGFjdGl2YXRpb25IZWxwZXIoJ0F1dGhlbnRpY2F0ZScpKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0ZUNtcCB7XG4gIGxvZ2luICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICBnZXRDb0F1dGhlcigpLmxvZ2luV3JhcCh1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoc3VjY2Vzc01zZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzTXNnKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyTXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyck1zZylcbiAgICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
