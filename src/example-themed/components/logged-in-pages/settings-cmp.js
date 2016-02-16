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
var co_auther_1 = require('../../../co-auther/co-auther');
var SettingsCmp = (function () {
    function SettingsCmp() {
    }
    SettingsCmp = __decorate([
        core_1.Component({
            selector: 'settings-cmp',
            template: "Settings"
        }),
        router_1.CanActivate(co_auther_1.setTerminal), 
        __metadata('design:paramtypes', [])
    ], SettingsCmp);
    return SettingsCmp;
})();
exports.SettingsCmp = SettingsCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvbG9nZ2VkLWluLXBhZ2VzL3NldHRpbmdzLWNtcC50cyJdLCJuYW1lcyI6WyJTZXR0aW5nc0NtcCIsIlNldHRpbmdzQ21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsMEJBQTBCLDhCQUUxQixDQUFDLENBRnVEO0FBRXhEO0lBQUFBO0lBSzBCQyxDQUFDQTtJQUwzQkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBLHVCQUFXQSxDQUFDQTs7b0JBQ0VBO0lBQURBLGtCQUFDQTtBQUFEQSxDQUwxQixBQUsyQkEsSUFBQTtBQUFkLG1CQUFXLGNBQUcsQ0FBQSIsImZpbGUiOiJleGFtcGxlLXRoZW1lZC9jb21wb25lbnRzL2xvZ2dlZC1pbi1wYWdlcy9zZXR0aW5ncy1jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7c2V0VGVybWluYWx9IGZyb20gJy4uLy4uLy4uL2NvLWF1dGhlci9jby1hdXRoZXInXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NldHRpbmdzLWNtcCcsXG4gIHRlbXBsYXRlOiBgU2V0dGluZ3NgXG59KVxuQENhbkFjdGl2YXRlKHNldFRlcm1pbmFsKVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ21wIHt9XG4iXSwic291cmNlUm9vdCI6Ii9ub2RlX21vZHVsZXMifQ==
