var app_cmp_page_object_1 = require('./app-cmp.page-object');
describe('MyComponentPageObject', function () {
    beforeEach(function () {
        browser.get('/src/example/');
    });
    var appCmpObj = new app_cmp_page_object_1.AppCmpPageObject();
    it('should be a text in the paragraph', function () {
        expect(appCmpObj.title.getText()).toEqual('co-auther demo');
    });
});
//# sourceMappingURL=co-auther.spec.js.map