import { Component } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup } from 'angular2/common';
import {BasicValidators} from '../shared/basic-validators';
import {CanDeactivate } from 'angular2/router';
@Component({
  templateUrl: 'app/users/add-user-form.template.html'
})
export class AddUserFormComponent implements CanDeactivate {
  userForm: ControlGroup;

  constructor(fb: FormBuilder) {
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

  routerCanDeactivate() {
    if(this.userForm.dirty) {
      return window.confirm('Are you sure to want to stop editing this form ?');
    }
  }
}
