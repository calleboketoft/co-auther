import {Component} from 'angular2/core'
import {CanActivate} from 'angular2/router'
import {activationHelper, getCoAuther} from '../../co-auther/co-auther'

@Component({
  selector: 'logged-in-cmp',
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
          <a class="nav-item nav-link" href="#">Dashboard</a>
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
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Reports</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>
        </div>
      </div>
    </div>
  `
})
@CanActivate(() => activationHelper('LoggedIn'))
export class LoggedInCmp {
  logOut ($event) {
    $event.preventDefault()
    getCoAuther().logoutWrap()
  }
}
