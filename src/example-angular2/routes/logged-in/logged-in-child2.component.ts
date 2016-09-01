import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'logged-in-child2',
  template: `Child2`
})
export class LoggedInChild2Component {
  private route$;
  private routeQuery$;
  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit () {
    // Path params
    // -----------
    // Reactive way of getting params
    this.route$ = this.activatedRoute.params.subscribe(params => {
      console.log('Reactive: ' + params['id'])
    })

    // Static way of getting params, no need to unsubscribe
    let param = +this.activatedRoute.snapshot.params['id']
    console.log('Static: ' + param)

    // Query params
    // ------------
    this.routeQuery$ = this.activatedRoute
      .queryParams
      .subscribe(params => {
        console.log('Query: ' + params['name'] + ', ' + params['food'])
      })
  }

  ngOnDestroy () {
    this.route$.unsubscribe()
  }
}
