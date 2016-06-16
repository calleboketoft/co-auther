import {Component} from '@angular/core'
import {CanActivate} from '@angular/router-deprecated'
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated'
import * as CoAuther from '../../co-auther/co-auther'
import {DashboardCmp} from './logged-in-pages/dashboard-cmp'
import {SettingsCmp} from './logged-in-pages/settings-cmp'

@RouteConfig([
  {path: '/dashboard',  name: 'Dashboard',  component: DashboardCmp,   useAsDefault: true},
  {path: '/settings',   name: 'Settings',   component: SettingsCmp}
])
@Component({
  selector: 'logged-in-cmp',
  directives: [ROUTER_DIRECTIVES],
  styles: [
    // Logged in main styles
    `
      .main {
        padding: 20px;
      }
      @media (min-width: 768px) {
        .main {
          padding-right: 40px;
          padding-left: 40px;
        }
      }
      .main .page-header {
        margin-top: 0;
      }

      /* Hide for mobile, show later */
      .sidebar {
        display: none;
      }
      @media (min-width: 768px) {
        .sidebar {
          position: fixed;
          top: 51px;
          bottom: 0;
          left: 0;
          z-index: 1000;
          display: block;
          padding: 20px;
          overflow-x: hidden;
          overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
          background-color: #f5f5f5;
          border-right: 1px solid #eee;
        }
      }
    `,
    // Top navbar styles
    `
      .navbar-fixed-top {
        border-bottom: 1px solid #E0E0E0;
        background-color: #ECECEC;
      }

      .navbar-fixed-top .navbar-brand {
        color: #5e5e5e;
      }

      .logout-btn {
        margin-left: 25px;
      }
    `,
    // Sidebar styles
    `
      .nav-sidebar {
        margin-right: -21px; /* 20px padding + 1px border */
        margin-bottom: 20px;
        margin-left: -20px;
      }
      .nav-sidebar > li > a ,
      .nav-sidebar > li > .link-section-header {
        padding-right: 20px;
        padding-left: 20px;
      }
      .nav-sidebar > .active > a,
      .nav-sidebar > .active > a:hover,
      .nav-sidebar > .active > a:focus {
        color: #fff;
        background-color: #428bca;
      }
    `
  ],
  template: `
    <nav class='navbar navbar-dark navbar-fixed-top bg-inverse'>
      <button type='button' class='navbar-toggler hidden-sm-up' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
        <span class='sr-only'>Toggle navigation</span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
      </button>
      <a class='navbar-brand' href='#'>Project name</a>
      <div id='navbar'>
        <nav class='nav navbar-nav pull-xs-right'>
          <button class='btn btn-primary logout-btn' type='button'
            (click)='logout($event)'>
            Logout
          </button>
        </nav>
      </div>
    </nav>

    <div class='container-fluid'>
      <div class='row'>
        <div class='col-sm-3 col-md-2 sidebar'>
          <ul class='nav nav-sidebar'>
            <li class='active'>
              <a [routerLink]='["/LoggedIn/Dashboard"]'>
                Dashboard
              </a>
            </li>
            <li>
              <a [routerLink]='["/LoggedIn/Settings"]'>
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
@CanActivate(() => CoAuther.activationHelper('LoggedIn'))
export class LoggedInCmp {
  public logout () {
    CoAuther.getCoAuther().logoutWrap().then(() => {
      window.location.reload()
    })
  }
}
