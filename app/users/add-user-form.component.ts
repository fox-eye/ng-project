import { Component } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup } from 'angular2/common';
@Component({
  templateUrl: 'app/users/add-user-form.template.html'
})
export class AddUserFormComponent {
  userForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: [],
      email: [],
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
