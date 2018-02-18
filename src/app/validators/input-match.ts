import { FormControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms';

export function vatNumberMatch(control: FormControl) {
    if (control.parent !== undefined) {
        return control.parent.value.vatNumber === control.value ? null : { 'vatNumberMatch': true };
    }
}
export function regNumberMatch(control: FormControl) {
    if (control.parent !== undefined) {
        return control.parent.value.registrationNumber === control.value ? null : { 'regNumberMatch': true };
    }
}
export function passwordMatch(control: FormControl) {
    if (control.parent !== undefined) {
        return control.parent.value.password === control.value ? null : { 'passwordMatch': true };
    }
}

// input validator to check if the email entered by the user is actually text in an email form
export function emailValidator(control: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!EMAIL_REGEXP.test(control.value)) {
      return {invalidEmail: true};
    }
}
