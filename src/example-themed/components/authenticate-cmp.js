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
var router_deprecated_1 = require('@angular/router-deprecated');
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
            template: "\n    <div class='container'>\n      <form class='form-signin'>\n        <h2 class='form-signin-heading'>Please sign in</h2>\n        <label for='inputEmail' class='sr-only'>Email address</label>\n        <input #username type='email' id='inputEmail' class='form-control' placeholder='Email address' required autofocus>\n        <label for='inputPassword' class='sr-only'>Password</label>\n        <input #password type='password' id='inputPassword' class='form-control' placeholder='Password' required>\n        <div class='checkbox'>\n          <label>\n            <input type='checkbox' value='remember-me'> Remember me\n          </label>\n        </div>\n        <button class='btn btn-lg btn-primary btn-block' type='button' (click)='login(username.value, password.value)'>Sign in</button>\n      </form>\n    </div> <!-- /container -->\n  "
        }),
        router_deprecated_1.CanActivate(function () { return co_auther_1.activationHelper('Authenticate'); }), 
        __metadata('design:paramtypes', [])
    ], AuthenticateCmp);
    return AuthenticateCmp;
}());
exports.AuthenticateCmp = AuthenticateCmp;
//# sourceMappingURL=authenticate-cmp.js.map