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
var LoggedInCmp = (function () {
    function LoggedInCmp() {
    }
    LoggedInCmp = __decorate([
        core_1.Component({
            selector: 'logged-in-cmp',
            template: "Logged in!"
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('LoggedIn'); }), 
        __metadata('design:paramtypes', [])
    ], LoggedInCmp);
    return LoggedInCmp;
})();
exports.LoggedInCmp = LoggedInCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtYmFzaWMvY29tcG9uZW50cy9sb2dnZWQtaW4tY21wLnRzIl0sIm5hbWVzIjpbIkxvZ2dlZEluQ21wIiwiTG9nZ2VkSW5DbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUMxQixDQUFDLENBRHdDO0FBQ3pDLHVCQUE0QixpQkFDNUIsQ0FBQyxDQUQ0QztBQUM3QywwQkFBaUMsMkJBRWpDLENBQUMsQ0FGMkQ7QUFFNUQ7SUFBQUE7SUFLMkJDLENBQUNBO0lBTDVCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsZUFBZUE7WUFDekJBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0EsY0FBTUEsT0FBQUEsNEJBQWdCQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUE1QkEsQ0FBNEJBLENBQUNBOztvQkFDcEJBO0lBQURBLGtCQUFDQTtBQUFEQSxDQUwzQixBQUs0QkEsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJleGFtcGxlLWJhc2ljL2NvbXBvbmVudHMvbG9nZ2VkLWluLWNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7IGFjdGl2YXRpb25IZWxwZXIgfSBmcm9tICcuLi8uLi9jby1hdXRoZXIvY28tYXV0aGVyJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dnZWQtaW4tY21wJyxcbiAgdGVtcGxhdGU6IGBMb2dnZWQgaW4hYFxufSlcbkBDYW5BY3RpdmF0ZSgoKSA9PiBhY3RpdmF0aW9uSGVscGVyKCdMb2dnZWRJbicpKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluQ21wIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
