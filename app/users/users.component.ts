import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from './user.service';

@Component({
  templateUrl: 'app/users/users.template.html', 
  directives: [ROUTER_DIRECTIVES],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService: UserService) { }

  users:any[];

  ngOnInit() {
    this._userService.getUsers().subscribe(users => { 
      this.users = users;
    });
  }

  deleteUser(user) {
    var deleteConfirmation = window.confirm('Are you sure to want to delete this user ?');
    if(deleteConfirmation) {
      this._userService.deleteUser(user.id).subscribe(() => {
       this.users.splice(this.users.indexOf(user), 1); 
      });
    }
  }
}

