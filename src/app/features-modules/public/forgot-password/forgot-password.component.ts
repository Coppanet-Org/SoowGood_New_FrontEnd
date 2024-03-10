import { TosterService } from './../../../shared/services/toster.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpService, UserAccountsService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CustomValidators } from 'src/app/shared/utils/auth-helper';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  confirmPasswordForm!: FormGroup;
  resetFormSubmitted: boolean = false;
  resetLoading: boolean = false;
  resetPasswordFieldType: string = 'password';
  resetConfPasswordFieldType: string = 'password';
  isEditable = false;
  otp: any;
  isLoading: boolean = false;
  activeTab = 0;
  otpMessage = '';
  errorMessage = '';
  otpLoading: boolean = false;
  redirectTo!: string | null;
  constructor(
    private UserAccountsService: UserAccountsService,
    private TosterService: TosterService,
    private fb: FormBuilder,
    private otpService: OtpService,
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    if (this.authService.authInfo()) {
      this.TosterService.customToast(
        'Your are already login your account',
        'warning'
      );
      this.router.navigate(['/']);
    }
    this.loadForm();
    this.activeRoute.queryParamMap.subscribe((params) => {
      this.redirectTo = params.get('redirect');
    });
  }
  loadForm() {
    // this.resetPasswordForm = this.fb.group(
    //   {
    //     username: [
    //       '',
    //       [Validators.required, Validators.pattern(/^(?:88)?[0-9]{11}$/)],
    //     ],
    //     newPassword: [
    //       '',
    //       [
    //         Validators.required,
    //         // CustomValidators.startsWithUppercase,
    //         CustomValidators.isAtLeast6Characters,
    //         CustomValidators.includesSpecialCharacter,
    //         CustomValidators.includesNumber,
    //       ],
    //     ],
    //     confirmPassword: ['', Validators.required],
    //   },
    //   { validator: CustomValidators.matchValidator }
    // );

    this.resetPasswordForm = this.fb.group(
      {
        username: [
          '',
          [Validators.required, Validators.pattern(/^(?:88)?[0-9]{11}$/)],
        ],
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
        accept: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: CustomValidators.matchValidator }
    );
    // secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }

  resetPassword() {
    this.errorMessage = '';
    this.resetFormSubmitted = true;
    if (this.resetPasswordForm.get('username')?.invalid) {
      return;
    }

    this.resetLoading = true;
    try {
      this.otpService
        .applyOtpForPasswordResetByClientKeyAndRoleAndMobileNo('SoowGood_App', this.redirectTo?.includes("agent") ? "agent" : "", this.resetPasswordForm.get('username')?.value)
        .subscribe({
          next: (res) => {
            if (res) {
              this.resetLoading = false;
              this.next(1);
              this.resetFormSubmitted = false;
            } else {
              this.errorMessage = 'User not found!';
              this.resetLoading = false;
              this.resetFormSubmitted = false;
              return;
            }
          },
          error: (err) => {
            this.TosterService.customToast(String(err.message), 'error');
            this.resetFormSubmitted = false;
          },
        });


      //this.UserAccountsService.isUserExistsByUserName(
      //  this.resetPasswordForm.get('username')?.value
      //).subscribe({
      //  next: (res) => {
      //    console.log(res);
      //    if (res) {
      //      this.resetLoading = false;
      //      this.next(1);
      //      this.resetFormSubmitted = false;
      //    } else {
      //      this.errorMessage = 'Mobile number not found!';
      //      this.resetLoading = false;
      //      this.resetFormSubmitted = false;
      //    }
      //  },
      //  error: (err) => {
      //    this.TosterService.customToast(String(err.message), 'error');
      //    this.resetFormSubmitted = false;
      //  },
      //});
    } catch (error) {
      this.TosterService.customToast(String(error), 'error');
      this.resetFormSubmitted = false;
    }
  }

  back(step: number) {
    this.activeTab = step;
  }

  next(step: number) {
    this.activeTab = step;
  }

  onIndexChange(stepper: any) {
    this.activeTab = stepper._selectedIndex;
  }

  verify() {
    this.errorMessage = '';
    this.otpLoading = true;
    let otp = this.otp;
    if (otp) {
      this.otpService.varifyOtp(Number(otp)).subscribe((res: boolean) => {
        if (res) {
          // this.userInfoModal = res;

          this.otpLoading = false;
          this.next(2);
        } else {
          this.errorMessage = 'Invalid OTP. Please check again!';
        }
      });
    }
  }

  onOtpChange(pin: any) {
    if (pin.length == 4) {
      this.otp = pin;
      this.verify();
    } else {
      console.log('Pin should be 4 character');
    }
  }

  resetPasswordVisibility(field: string) {
    if (field === 'newPassword') {
      this.resetPasswordFieldType =
        this.resetPasswordFieldType === 'password' ? 'text' : 'password';
    } else if (field === 'confirmPassword') {
      this.resetConfPasswordFieldType =
        this.resetConfPasswordFieldType === 'password' ? 'text' : 'password';
    }
  }

  confirmPassword() {
    this.resetFormSubmitted = true;
    this.errorMessage = '';
    let accept = this.resetPasswordForm.get('accept')?.value;
    let confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;

    let obj = {
      userId: this.resetPasswordForm.get('username')?.value,
      newPassword: this.resetPasswordForm.get('newPassword')?.value,
    };

    if (!accept) {
      this.errorMessage = 'You must accept terms & condition';
      return;
    }

    if (confirmPassword !== obj.newPassword) {
      this.errorMessage = 'Password not matched';
      return;
    }
    if (obj.newPassword && obj.userId && accept) {
      this.resetLoading = true;
      this.UserAccountsService.resetPasswordByInputDto(obj).subscribe({
        next: (res) => {
          if (res.success) {
            this.TosterService.customToast(String(res.message), 'success');
            this.resetLoading = false;
            this.resetFormSubmitted = false;
            this.router.navigate(['/' + this.redirectTo]);
            this.resetPasswordForm.reset();
          } else {
            this.TosterService.customToast(String(res.message), 'error');
            this.resetFormSubmitted = false;
            this.resetLoading = false;
          }
        },
        error: (err) => {
          this.TosterService.customToast(String(err.message), 'error');
          this.resetFormSubmitted = false;
          this.resetLoading = false;
        },
      });
    } else {
      this.TosterService.customToast('Password/userId not found', 'error');
      this.resetFormSubmitted = false;
      this.resetLoading = false;
    }
  }
}
