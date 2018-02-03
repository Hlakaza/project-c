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
