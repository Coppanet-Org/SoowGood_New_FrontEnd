import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../utils/auth-helper';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  changePasswordShow = false;
  resetLoading = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.resetPasswordForm = this.fb.group(
      {
        newPassword: [
          '',
          [
            Validators.required,
            // CustomValidators.startsWithUppercase,
            CustomValidators.isAtLeast6Characters,
            CustomValidators.includesSpecialCharacter,
            CustomValidators.includesNumber,
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: CustomValidators.matchValidator }
    );
  }
  resetPassword() {}
  confirmPassword() {}
}
