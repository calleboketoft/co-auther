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
}());
exports.SettingsCmp = SettingsCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtY21wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MtY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsMEJBQTBCLDhCQUUxQixDQUFDLENBRnVEO0FBT3hEO0lBQUE7SUFBMEIsQ0FBQztJQUwzQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0Qsb0JBQVcsQ0FBQyx1QkFBVyxDQUFDOzttQkFBQTtJQUNDLGtCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLG1CQUFXLGNBQUcsQ0FBQSJ9