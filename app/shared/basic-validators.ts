import { Control } from 'angular2/common';

export class BasicValidators {

  static invalidEmail(control: Control) {
   var emailRegexPattern= /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i 

    if(!emailRegexPattern.test(control.value)) {
     return { invalidEmail: true };
    }
    return null;
  }
}
