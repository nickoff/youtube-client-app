import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AdminFormErrors } from '../enums/validate.enum';

const dateNotFuture = 'The date is invalid';

export function validateDateNotFuture(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    if (!value) return null;

    const errors: ValidationErrors = {};
    if (Date.now() < Date.parse(value)) {
      errors[AdminFormErrors.dateNotFuture] = dateNotFuture;
    }
    return Object.keys(errors).length ? errors : null;
  };
}
