// globals from protractor
declare var describe:any
declare var it:any
declare var expect:any
declare var beforeEach:any
declare var browser:any

import { AppCmpPageObject } from './app-cmp.page-object'
import { AuthenticateCmpPageObject } from './authenticate-cmp.page-object'
import { InitialRequestCmpPageObject } from './initial-request-cmp.page-object'
import { LoggedInCmpPageObject } from './logged-in-cmp.page-object'

describe('MyComponentPageObject' , () => {
  beforeEach(() => {
    browser.get('/src/')
  })

  let appCmpObj = new AppCmpPageObject()
  it('should be a text in the paragraph', () => {
    expect(appCmpObj.title.getText()).toEqual('co-auther demo')
  })
})
