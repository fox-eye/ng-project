import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: 'app/navbar/navbar.template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
}

