"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var co_auther_provider_1 = require("./co-auther.provider");
var co_auther_guard_1 = require("./co-auther.guard");
var api_service_1 = require("./api.service");
var app_routes_1 = require("./routes/app.routes");
var app_component_1 = require("./routes/app.component");
var authenticate_component_1 = require("./routes/authenticate/authenticate.component");
var initial_request_component_1 = require("./routes/initial-request/initial-request.component");
var logged_in_component_1 = require("./routes/logged-in/logged-in.component");
var logged_in_child_component_1 = require("./routes/logged-in/logged-in-child.component");
var logged_in_child2_component_1 = require("./routes/logged-in/logged-in-child2.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                authenticate_component_1.AuthenticateComponent,
                initial_request_component_1.InitialRequestComponent,
                logged_in_component_1.LoggedInComponent,
                logged_in_child_component_1.LoggedInChildComponent,
                logged_in_child2_component_1.LoggedInChild2Component
            ],
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing],
            providers: [
                co_auther_guard_1.CoAutherGuard,
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                },
                api_service_1.ApiService,
                co_auther_provider_1.coAutherProvider // CoAutherGuard needs this
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map