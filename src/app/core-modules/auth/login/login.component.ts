import { TosterService } from './../../../shared/services/toster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DoctorProfileService,
  PatientProfileService,
  UserAccountsService,
} from '../../../proxy/services';
import { SubSink } from 'subsink';
import {
  DoctorProfileDto,
  LoginDto,
  LoginResponseDto,
  PatientProfileDto,
} from '../../../proxy/dto-models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CustomValidators } from 'src/app/shared/utils/auth-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  defaultAuth: any = {
    mobileNo: '',
    password: '',
  };
  formSubmitted: boolean = false;
  errorMessage: string = '';
  loginForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  loginDto: LoginDto = {} as LoginDto;
  hasError: boolean = false;
  returnUrl!: string;
  subs = new SubSink();
  isLoading: any = false;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  changePasswordShow: boolean = false;
  resetModalShow: boolean = false;
  resetLoading: boolean = false;
  loginResponse: any;
  resetFormSubmitted: boolean = false;
  constructor(
    private authService: UserAccountsService,
    private doctorProfileService: DoctorProfileService,
    private PatientProfileService: PatientProfileService,
    private fb: FormBuilder,
    private _router: Router,
    private ToasterService: TosterService,
    private NormalAuth: AuthService,
    private UserAccountsService: UserAccountsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get formControl() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      mobileNo: [
        this.defaultAuth.mobileNo,
        [
          Validators.required,
          Validators.pattern(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],

      password: [
        this.defaultAuth.password,
        Validators.compose([
            Validators.required,
            // CustomValidators.startsWithUppercase,
            CustomValidators.isAtLeast6Characters,
            CustomValidators.includesSpecialCharacter,
            CustomValidators.includesNumber,

        ]),
      ],
    });

    this.resetPasswordForm = this.fb.group(
      {
        username: ['', [
          Validators.required,
          Validators.pattern(/^(?:88)?[0-9]{11}$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ]],
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

  passwordVisibility(field: string) {
    if (field === 'password') {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password';
    } else if (field === 'confirmPassword') {
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
    }
  }

  // onSubmit(): void {
  //   this.formSubmitted = true
  //   if (!this.loginForm.valid && !this.loginForm.touched) {
  //     this.ToasterService.customToast(
  //       'Please filled all required field',
  //       'warning'
  //     );
  //     this.isLoading = false;
  //     return;
  //   } else {
  //     if (this.loginForm.invalid) {
  //       this.isLoading = false;
  //       return
  //     }
  //     this.formSubmitted = false
  //     this.isLoading = true;
  //     let userType = '';
  //     this.errorMessage = '';
  //     this.hasError = false;
  //     const username = this.formControl['mobileNo'].value;
  //     const password = this.formControl['password'].value;
  //     this.loginDto.userName = username;
  //     this.loginDto.email = '';
  //     this.loginDto.password = password;
  //     this.loginDto.rememberMe = false;
  //     let loginResponseData: LoginResponseDto;

  //     try {
  //       this.authService
  //         .loginByUserDto(this.loginDto)
  //         .subscribe((loginResponse: LoginResponseDto) => {
  //           if (loginResponse.success && loginResponse.roleName[0] == 'Doctor') {
  //             this.isLoading = false;
  //             this.subs.sink = this.doctorProfileService.getByUserName(loginResponse.userName ? loginResponse.userName : '')
  //               .subscribe((doctorDto: DoctorProfileDto) => {
  //                 let saveLocalStorage = {
  //                   identityNumber: doctorDto.identityNumber,
  //                   doctorName: doctorDto.fullName,
  //                   bmdcRegNo: doctorDto.bmdcRegNo,
  //                   isActive: doctorDto.isActive,
  //                   userId: doctorDto.userId,
  //                   id: doctorDto.id,
  //                   specialityId: doctorDto.specialityId,
  //                   profileStep: doctorDto.profileStep,
  //                   createFrom: doctorDto.createFrom,
  //                   userType: loginResponse.roleName.toString().toLowerCase(),
  //                 };
  //                 this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
  //                 if (
  //                   doctorDto.profileStep == 1 ||
  //                   doctorDto.profileStep == 2
  //                 ) {
  //                   userType = '/signup';
  //                 } else {
  //                   userType = doctorDto.isActive
  //                     ? loginResponse.roleName.toString() + '/dashboard'
  //                     : loginResponse.roleName.toString() +
  //                     '/profile-settings/basic-info';
  //                 }
  //                 this._router
  //                   .navigate([userType.toLowerCase()], {
  //                     state: { data: doctorDto }, // Pass the 'res' object as 'data' in the state object
  //                   })
  //                   .then((r) => {
  //                     this.ToasterService.customToast(
  //                       loginResponse.message ? loginResponse.message : ' ',
  //                       'success'
  //                     );
  //                   });
  //               });

  //           }

  //           else if (loginResponse.success && loginResponse.roleName[0] == 'Patient') {
  //             this.isLoading = false;
  //             this.subs.sink = this.PatientProfileService.getByUserName(
  //               loginResponse.userName ? loginResponse.userName : ''
  //             )
  //               .subscribe((patientDto: PatientProfileDto) => {
  //               let saveLocalStorage = {
  //                 userId: patientDto.userId,
  //                 id: patientDto.id,
  //                 userType: loginResponse.roleName.toString().toLowerCase(),
  //               };
  //               this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
  //               let userType = loginResponse.roleName.toString() + '/dashboard';

  //               this._router
  //                 .navigate([userType.toLowerCase()], {
  //                   state: { data: patientDto }, // Pass the 'res' object as 'data' in the state object
  //                 })
  //                 .then((r) => {
  //                   this.ToasterService.customToast(
  //                     loginResponse.message ? loginResponse.message : ' ',
  //                     'success'
  //                   );
  //                 });
  //             });
  //           }

  //           else {
  //             this.isLoading = false;
  //             // this.loginForm.get('mobileNo')?.setErrors({ customError: loginResponse.message });
  //             // this.loginForm.get('password')?.setErrors({ customError: loginResponse.message });

  //             this.ToasterService.customToast(
  //               loginResponse.message ? loginResponse.message : ' ',
  //               'error'
  //             );
  //           }

  //         })

  //     } catch (error: any) {
  //       this.hasError = true;
  //       console.log(error.error,"hhh");

  //       if (error.message === "'tokenEndpoint' should not be null") {
  //         this.errorMessage = 'Identity server is not running';
  //       }
  //       if (error.message === "There is no entity DoctorProfile with id = !") {
  //         this.ToasterService.customToast('User not found',
  //           'error'
  //         );
  //       }

  //     }
  //   }
  // }
  onSubmit(): void {
    this.formSubmitted = true;

    if (!this.loginForm.valid && !this.loginForm.touched) {
      this.ToasterService.customToast(
        'Please fill in all required fields',
        'warning'
      );
      this.isLoading = false;
      return;
    } else {
      if (this.loginForm.invalid) {
        this.isLoading = false;
        return;
      }

      this.formSubmitted = false;
      this.isLoading = true;
      let userType = '';
      this.errorMessage = '';
      this.hasError = false;
      const username = this.formControl['mobileNo'].value.trim();
      const password = this.formControl['password'].value.trim();
      this.loginDto.userName = username;
      this.loginDto.email = '';
      this.loginDto.password = password;
      this.loginDto.rememberMe = false;

      try {
        this.authService
          .loginByUserDto(this.loginDto)
          .subscribe((loginResponse: LoginResponseDto) => {
            this.loginResponse = loginResponse;
            if (
              this.loginResponse.message.includes(
                'User Name Or Password is not correct !'
              )
            ) {
              this.ToasterService.customToast(
                String(this.loginResponse.message),
                'error'
              );
              this.isLoading = false;
              return;
            }
            if (
              loginResponse.success &&
              loginResponse.roleName[0] == 'Doctor'
            ) {
              this.isLoading = false;
              this.subs.sink = this.doctorProfileService
                .getByUserName(
                  loginResponse.userName ? loginResponse.userName : ''
                )
                .subscribe(
                  (doctorDto: DoctorProfileDto) => {
                    let saveLocalStorage = {
                      identityNumber: doctorDto.identityNumber,
                      fullName: doctorDto.fullName,
                      bmdcRegNo: doctorDto.bmdcRegNo,
                      isActive: doctorDto.isActive,
                      userId: doctorDto.userId,
                      id: doctorDto.id,
                      specialityId: doctorDto.specialityId,
                      profileStep: doctorDto.profileStep,
                      createFrom: doctorDto.createFrom,
                      userType: loginResponse.roleName.toString().toLowerCase(),
                    };
                    this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
                    if (
                      doctorDto.profileStep == 1 ||
                      doctorDto.profileStep == 2
                    ) {
                      userType = '/signup';
                      //this._router.navigate(['/signup']);
                    } else {
                      userType = doctorDto.isActive
                        ? loginResponse.roleName.toString() + '/dashboard'
                        : loginResponse.roleName.toString() +
                          '/profile-settings/basic-info';
                    }
                    this._router
                      .navigate([userType.toLowerCase()], {
                        state: { data: doctorDto },
                      })
                      .then(() => {
                        this.ToasterService.customToast(
                          loginResponse.message ? loginResponse.message : ' ',
                          'success'
                        );
                      });
                  },
                  (doctorError: any) => {
                    // Handle DoctorProfile service error

                    this.handleProfileError(doctorError);
                  }
                );
            } else if (
              loginResponse.success &&
              loginResponse.roleName[0] == 'Patient'
            ) {
              this.isLoading = false;
              this.subs.sink = this.PatientProfileService.getByUserName(
                loginResponse.userName ? loginResponse.userName : ''
              ).subscribe(
                (patientDto: PatientProfileDto) => {
                  let saveLocalStorage = {
                    fullName:patientDto.fullName,
                    userId: patientDto.userId,
                    id: patientDto.id,
                    userType: loginResponse.roleName.toString().toLowerCase(),
                  };
                  this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
                  let userType =
                    loginResponse.roleName.toString() + '/dashboard';

                  this._router
                    .navigate([userType.toLowerCase()], {
                      state: { data: patientDto },
                    })
                    .then(() => {
                      this.ToasterService.customToast(
                        loginResponse.message ? loginResponse.message : ' ',
                        'success'
                      );
                    });
                },
                (patientError: any) => {
                  // Handle PatientProfile service error
                  this.handleProfileError(patientError);
                }
              );
            }
          });
      } catch (error: any) {
        this.hasError = true;
        if (error.message === "'tokenEndpoint' should not be null") {
          this.errorMessage = 'Identity server is not running';
        }
      }
    }
  }

  // Additional method to handle profile service errors
  private handleProfileError(error: any): void {
    console.log(error, this.loginResponse);
    if (
      error.error.error.message ===
      'There is no entity DoctorProfile with id = !'
    ) {
      this.ToasterService.customToast('User not found', 'error');
    } else {
      this.ToasterService.customToast(
        String(error.error.error.message),
        'error'
      );
    }
  }
  resetModal() {
    this.resetModalShow = !this.resetModalShow;
  }

  resetPassword() {
    this.resetFormSubmitted = true;
    if (this.resetPasswordForm.get('username')?.invalid) {
      this.ToasterService.customToast(
        'Please enter your phone number',
        'warning'
        );
        return;
      }
      
    this.resetLoading = true;
    try {
      this.UserAccountsService.isUserExistsByUserName(
        this.resetPasswordForm.get('username')?.value
      ).subscribe({
        next: (res) => {
          if (res) {
            this.resetLoading = false;
            this.changePasswordShow = res;
            this.resetFormSubmitted = false;
          } else {
            this.ToasterService.customToast(
              'Something went wrong! Please try again',
              'error'
            );
            this.changePasswordShow = res;
            this.resetLoading = false;
            this.resetFormSubmitted = false;
          }
        },
        error: (err) => {
          this.ToasterService.customToast(String(err.message), 'error');
          this.resetFormSubmitted = false;
        },
      });
    } catch (error) {
      this.ToasterService.customToast(String(error), 'error');
      this.resetFormSubmitted = false;
    }
  }

  confirmPassword() {
    this.resetFormSubmitted = true;
    
    let obj = {
      userId: this.resetPasswordForm.get('username')?.value,
      newPassword: this.resetPasswordForm.get('newPassword')?.value,
    };
    if (!obj.newPassword && !this.resetPasswordForm.get('confirmPassword')?.value) {
      this.ToasterService.customToast(
        'Please enter your new password',
        'warning'
        );
        return;
      }
      this.resetLoading = true;
    this.UserAccountsService.resetPasswordByInputDto(obj).subscribe({
      next: (res) => {
        if (res.success) {
          this.ToasterService.customToast(String(res.message), 'success');
          this.resetModalShow = false;
          this.resetLoading = false;
          this.resetFormSubmitted = false;
        } else {
          this.ToasterService.customToast(String(res.message), 'error');
          this.resetFormSubmitted = false;
          this.resetLoading = false;

        }
      },
      error: (err) => {
        this.ToasterService.customToast(String(err.message), 'error');
        this.resetFormSubmitted = false;
        this.resetLoading = false;

      },
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
