declare var element
declare var by
export class AppCmpPageObject {
  public title = element(by.tagName('p'))
}