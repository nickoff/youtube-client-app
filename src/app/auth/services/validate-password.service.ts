/* eslint-disable max-len */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthErrors } from '../enums';
import { VALIDATION_REGEXP, ERRORS_MESSAGES } from '../constants';

const minLengthPassword = 8;

export function validatePasswordStrength(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    if (!value) return null;

    const errors: ValidationErrors = {};
    const conditions = [
      { test: VALIDATION_REGEXP.symbolRequired.test(value), error: AuthErrors.symbolRequired },
      { test: VALIDATION_REGEXP.upperCaseRequired.test(value), error: AuthErrors.upperCaseRequired },
      { test: VALIDATION_REGEXP.lowerCaseRequired.test(value), error: AuthErrors.lowerCaseRequired },
      { test: VALIDATION_REGEXP.numericRequired.test(value), error: AuthErrors.numericRequired },
      { test: value.length > minLengthPassword, error: AuthErrors.lengthRequired }
    ];

    conditions.forEach(condition => {
      if (!condition.test) {
        errors[condition.error] = ERRORS_MESSAGES[condition.error];
      }
    });

    return Object.keys(errors).length ? errors : null;
  };
}
