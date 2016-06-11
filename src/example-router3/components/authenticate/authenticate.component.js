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
var CoAuther = require('../../../co-auther/co-auther');
var AuthenticateComponent = (function () {
    function AuthenticateComponent() {
    }
    AuthenticateComponent.prototype.login = function (username, password) {
        CoAuther.getCoAuther().loginWrap(username, password);
    };
    AuthenticateComponent = __decorate([
        core_1.Component({
            selector: 'authenticate',
            template: "\n    <label>Username<input #username type='text'></label><br>\n    <label>Password<input #password type='password'></label><br>\n    <button (click)='login(username.value, password.value)'>Login</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticateComponent);
    return AuthenticateComponent;
}());
exports.AuthenticateComponent = AuthenticateComponent;
//# sourceMappingURL=authenticate.component.js.map