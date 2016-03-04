"use strict";
var app_cmp_page_object_1 = require('./app-cmp.page-object');
describe('MyComponentPageObject', function () {
    beforeEach(function () {
        browser.get('/src/example-basic/');
    });
    var appCmpObj = new app_cmp_page_object_1.AppCmpPageObject();
    it('should be a text in the paragraph', function () {
        expect(appCmpObj.title.getText()).toEqual('co-auther demo');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tYXV0aGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjby1hdXRoZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0Esb0NBQWlDLHVCQUNqQyxDQUFDLENBRHVEO0FBS3hELFFBQVEsQ0FBQyx1QkFBdUIsRUFBRztJQUNqQyxVQUFVLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLFNBQVMsR0FBRyxJQUFJLHNDQUFnQixFQUFFLENBQUE7SUFDdEMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9