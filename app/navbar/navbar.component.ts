import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: 'app/navbar/navbar.template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
  constructor(private _router: Router) {
  }

  isCurrentRoute(route) {
    // obsolete in current version, use RouterLinkActive directive!
    // https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html
    var instruction = this._router.generate(route);
    return this._router.isRouteActive(instruction);
  }
}

