import {Component} from 'angular2/core'
import {CanActivate} from 'angular2/router'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {activationHelper, getCoAuther} from '../../co-auther/co-auther'
import {DashboardCmp} from './logged-in-pages/dashboard-cmp'
import {SettingsCmp} from './logged-in-pages/settings-cmp'

@RouteConfig([
  {path: '/dashboard',  as: 'Dashboard',  component: DashboardCmp,   useAsDefault: true},
  {path: '/settings',   as: 'Settings',   component: SettingsCmp}
])
@Component({
  selector: 'logged-in-cmp',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar navbar-dark navbar-fixed-top bg-inverse">
      <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Project name</a>
      <div id="navbar">
        <nav class="nav navbar-nav pull-xs-left">
          <a class="nav-item nav-link" href="#" (click)="logOut($event)">Logout</a>
        </nav>
        <form class="pull-xs-right">
          <input type="text" class="form-control" placeholder="Search...">
        </form>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a [routerLink]="['/LoggedIn/Dashboard']">Dashboard<span class="sr-only">(current)</span></a></li>
            <li><a [routerLink]="['/LoggedIn/Settings']">Settings</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Dummy item 1</a></li>
            <li><a href="">Dummy item 2</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
@CanActivate((next, previous) => {
  console.log('next:', next ? '"' + next.urlPath + '"' : null, 'previous:', previous ? '"' + previous.urlPath + '"' : null)
  return activationHelper('LoggedIn')
})
export class LoggedInCmp {
  logOut ($event) {
    $event.preventDefault()
    getCoAuther().logoutWrap()
  }
}
