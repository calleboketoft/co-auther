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
            template: "Initial request..."
        }),
        router_1.CanActivate(function () { return co_auther_1.activationHelper('InitialRequest'); }), 
        __metadata('design:paramtypes', [])
    ], InitialRequestCmp);
    return InitialRequestCmp;
})();
exports.InitialRequestCmp = InitialRequestCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdGhlbWVkL2NvbXBvbmVudHMvaW5pdGlhbC1yZXF1ZXN0LWNtcC50cyJdLCJuYW1lcyI6WyJJbml0aWFsUmVxdWVzdENtcCIsIkluaXRpYWxSZXF1ZXN0Q21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsMEJBQStCLDJCQUUvQixDQUFDLENBRnlEO0FBRTFEO0lBQUFBO0lBS2dDQyxDQUFDQTtJQUxqQ0Q7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLHFCQUFxQkE7WUFDL0JBLFFBQVFBLEVBQUVBLG9CQUFvQkE7U0FDL0JBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQSxjQUFNQSxPQUFBQSw0QkFBZ0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsRUFBbENBLENBQWtDQSxDQUFDQTs7MEJBQ3JCQTtJQUFEQSx3QkFBQ0E7QUFBREEsQ0FMaEMsQUFLaUNBLElBQUE7QUFBcEIseUJBQWlCLG9CQUFHLENBQUEiLCJmaWxlIjoiZXhhbXBsZS10aGVtZWQvY29tcG9uZW50cy9pbml0aWFsLXJlcXVlc3QtY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0NhbkFjdGl2YXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXG5pbXBvcnQge2FjdGl2YXRpb25IZWxwZXJ9IGZyb20gJy4uLy4uL2NvLWF1dGhlci9jby1hdXRoZXInXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWwtcmVxdWVzdC1jbXAnLFxuICB0ZW1wbGF0ZTogYEluaXRpYWwgcmVxdWVzdC4uLmBcbn0pXG5AQ2FuQWN0aXZhdGUoKCkgPT4gYWN0aXZhdGlvbkhlbHBlcignSW5pdGlhbFJlcXVlc3QnKSlcbmV4cG9ydCBjbGFzcyBJbml0aWFsUmVxdWVzdENtcCB7fVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
