/** Angular Imports */
import { AbstractControl, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

/** Validates that the values of password and confirm password are same. */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const resetPasswordForm = control as FormGroup;
  const password = resetPasswordForm.get('password');
  const confirmPassword = resetPasswordForm.get('repeatPassword');
  return password && confirmPassword && password.value !== confirmPassword.value ?  { 'passwordsDoNotMatch': true } : null;
};
