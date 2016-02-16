var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_cmp_1 = require('./components/app-cmp');
browser_1.bootstrap(app_cmp_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtYmFzaWMvYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUEwQiwyQkFDMUIsQ0FBQyxDQURvRDtBQUNyRCxxQkFBcUIsZUFDckIsQ0FBQyxDQURtQztBQUNwQyx1QkFBeUUsaUJBQ3pFLENBQUMsQ0FEeUY7QUFDMUYscUJBQStCLGVBRS9CLENBQUMsQ0FGNkM7QUFFOUMsd0JBQXVCLHNCQUV2QixDQUFDLENBRjRDO0FBRTdDLG1CQUFTLENBQUMsZ0JBQU0sRUFBRTtJQUNoQix5QkFBZ0I7SUFDaEIscUJBQWM7SUFDZCxXQUFJLENBQUMseUJBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQW9CLENBQUM7Q0FDckQsQ0FBQyxDQUFBIiwiZmlsZSI6ImV4YW1wbGUtYmFzaWMvYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXG5cbmltcG9ydCB7IEFwcENtcCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAtY21wJ1xuXG5ib290c3RyYXAoQXBwQ21wLCBbXG4gIFJPVVRFUl9QUk9WSURFUlMsXG4gIEhUVFBfUFJPVklERVJTLFxuICBiaW5kKExvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3MoSGFzaExvY2F0aW9uU3RyYXRlZ3kpXG5dKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
