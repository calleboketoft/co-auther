// Angular
import { Component } from '@angular/core'

// API and authentication services
import { CoAuther } from '../../../'

@Component({
  selector: 'app',
  template: `
    <div style="margin: 30px;">
      <p style="font-weight: bold;">co-auther demo</p>
      <a [routerLink]="['/authenticate']">Authenticate</a>&nbsp;|&nbsp;
      <a [routerLink]="['/logged-in']">Logged In</a>&nbsp;|&nbsp;
      <a [routerLink]="['/logged-in/child2/', 6]">Logged in - Child2</a>&nbsp;|&nbsp;
      <a [routerLink]="['/initial-request']">Initial Request</a>&nbsp;|&nbsp;
      <a (click)="logout()" style="cursor: pointer;">Log out</a>
      <br ><br>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(private coAuther: CoAuther) {}

  logout() {
    this.coAuther.logoutWrap()
  }
}
