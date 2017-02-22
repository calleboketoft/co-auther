import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'logged-in',
  template: `
    Logged in!<br>
    <a [routerLink]="['/logged-in/child2', 12]">Child 2, inline link</a>
    <br>
    <button class="btn btn-primary" (click)="goToChild2()">
      Child 2, code link
    </button>
    <br><br>
    <router-outlet></router-outlet>
  `
})
export class LoggedInComponent {
  public count = 1
  constructor (private router: Router) {}


  public goToChild2 () {
    this.router.navigate(['/logged-in/child2', 13], {
      queryParams: {
        name: 'calle',
        food: 'banana',
        counter: this.count,
        nested: JSON.stringify({
          myparam: 'works'
        })
      }
    })
    this.count ++
  }
}
