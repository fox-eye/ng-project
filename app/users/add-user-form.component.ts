import { Component } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup } from 'angular2/common';
import {BasicValidators} from '../shared/basic-validators';
@Component({
  templateUrl: 'app/users/add-user-form.template.html'
})
export class AddUserFormComponent {
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
}
