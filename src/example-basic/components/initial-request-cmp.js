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
var InitialRequestCmp = (function () {
    function InitialRequestCmp() {
    }
    InitialRequestCmp = __decorate([
        core_1.Component({
            selector: 'initial-request-cmp',
            template: "Making initial request..."
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('InitialRequest'); }), 
        __metadata('design:paramtypes', [])
    ], InitialRequestCmp);
    return InitialRequestCmp;
})();
exports.InitialRequestCmp = InitialRequestCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtYmFzaWMvY29tcG9uZW50cy9pbml0aWFsLXJlcXVlc3QtY21wLnRzIl0sIm5hbWVzIjpbIkluaXRpYWxSZXF1ZXN0Q21wIiwiSW5pdGlhbFJlcXVlc3RDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUMxQixDQUFDLENBRHdDO0FBQ3pDLHVCQUE0QixpQkFDNUIsQ0FBQyxDQUQ0QztBQUM3QywwQkFBaUMsMkJBRWpDLENBQUMsQ0FGMkQ7QUFFNUQ7SUFBQUE7SUFLaUNDLENBQUNBO0lBTGxDRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEscUJBQXFCQTtZQUMvQkEsUUFBUUEsRUFBRUEsMkJBQTJCQTtTQUN0Q0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBLGNBQU1BLE9BQUFBLDRCQUFnQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxFQUFsQ0EsQ0FBa0NBLENBQUNBOzswQkFDcEJBO0lBQURBLHdCQUFDQTtBQUFEQSxDQUxqQyxBQUtrQ0EsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQSIsImZpbGUiOiJleGFtcGxlLWJhc2ljL2NvbXBvbmVudHMvaW5pdGlhbC1yZXF1ZXN0LWNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7IGFjdGl2YXRpb25IZWxwZXIgfSBmcm9tICcuLi8uLi9jby1hdXRoZXIvY28tYXV0aGVyJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFsLXJlcXVlc3QtY21wJyxcbiAgdGVtcGxhdGU6IGBNYWtpbmcgaW5pdGlhbCByZXF1ZXN0Li4uYFxufSlcbkBDYW5BY3RpdmF0ZSgoKSA9PiBhY3RpdmF0aW9uSGVscGVyKCdJbml0aWFsUmVxdWVzdCcpKVxuZXhwb3J0IGNsYXNzIEluaXRpYWxSZXF1ZXN0Q21wIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
