import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { AppComponent } from './routes/app.component'
import { APP_ROUTER_PROVIDERS } from './routes/app.routes'
import { coAutherProvider } from './co-auther.provider'
import { ApiService } from './api.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: [
    APP_ROUTER_PROVIDERS,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ApiService,
    coAutherProvider // CoAutherGuard needs this
  ]
})
export class AppModule { }