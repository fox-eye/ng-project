import { Component, OnInit } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup } from 'angular2/common';
import { BasicValidators } from '../shared/basic-validators';
import { CanDeactivate, RouteParams } from 'angular2/router';
import { UserService }from './user.service';
import { Router } from 'angular2/router';
import { User } from './user';

@Component({
  templateUrl: 'app/users/user-form.template.html',
  providers: [UserService]
})
export class UserFormComponent implements CanDeactivate, OnInit {
  userForm: ControlGroup;
  title:string;
  user = new User(); 
  
  constructor(
    fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _routeParams: RouteParams
  ) {
      this.userForm = fb.group({
        name: ['', Validators.required],
        email: ['', BasicValidators.invalidEmail],
        phone: [],
        address: fb.group({
          street: [],
          suite: [],
          city: [],
          zipcode: []
        })
      });
  }

  ngOnInit() {
    var id = this._routeParams.get('id');

    this.title = (id) ? 'Edit user' : 'New user'; 

    if(!id) {
      return;
    }

    this._userService
    .getUser(id)
    .subscribe(
      user => { this.user = user },
      response => {
        if(response.status === '404') {
           this._router.navigate(['NotFound']);
        }
      }
    );
  
  }

  routerCanDeactivate() {
    if(this.userForm.dirty) {
      return window.confirm('Are you sure to want to stop editing this form ?');
    }
  }

  saveUser() {
    var result;
    if(this.user.id) {
      result = this._userService.updateUser(this.user);
    }
    else {
      result = this._userService.addUser(this.user);
    }
    result.subscribe( () => this._router.navigate(['Users']));
  }
}
