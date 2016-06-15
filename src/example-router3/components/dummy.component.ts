import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'dummy',
  template: `
    Dummy component
  `
})
export class DummyComponent {
  constructor (private router: Router) {}
  ngOnInit () {
    this.router.navigate(['/authenticate'])
  }
}