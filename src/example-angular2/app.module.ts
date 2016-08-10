import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { coAutherProvider } from './co-auther.provider'
import { CoAutherGuard } from './co-auther.guard'
import { ApiService } from './api.service'
import { routing } from './routes/app.routes'

import { AppComponent } from './routes/app.component'
import { AuthenticateComponent } from './routes/authenticate/authenticate.component'
import { InitialRequestComponent } from './routes/initial-request/initial-request.component'
import { LoggedInComponent } from './routes/logged-in/logged-in.component'
import { LoggedInChildComponent } from './routes/logged-in/logged-in-child.component'
import { LoggedInChild2Component } from './routes/logged-in/logged-in-child2.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AuthenticateComponent,
    InitialRequestComponent,
    LoggedInComponent,
    LoggedInChildComponent,
    LoggedInChild2Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CoAutherGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ApiService,
    coAutherProvider // CoAutherGuard needs this
  ]
})
export class AppModule { }