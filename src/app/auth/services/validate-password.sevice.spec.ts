import { FormControl } from '@angular/forms';
import { validatePasswordStrength } from './validate-password.service';
import { AuthErrors } from '../enums';

describe('validatePasswordStrength', () => {
  it('should return null if password is empty', () => {
    expect.assertions(1);
    const control = new FormControl('');
    expect(validatePasswordStrength()(control)).toBeNull();
  });

  it('should return error if password does not contain an uppercase letter', () => {
    expect.assertions(1);
    const control = new FormControl('password1!');
    const result = validatePasswordStrength()(control);
    expect(result).toHaveProperty(AuthErrors.upperCaseRequired);
  });
});
