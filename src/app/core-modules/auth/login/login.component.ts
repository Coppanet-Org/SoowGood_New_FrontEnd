
import { TosterService } from './../../../shared/services/toster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DoctorProfileService,
  PatientProfileService,
  UserAccountsService,
} from '../../../proxy/services';
import { SubSink } from 'SubSink';
import {
  DoctorProfileDto,
  LoginDto,
  LoginResponseDto,
  PatientProfileDto,
} from '../../../proxy/dto-models';
import { AuthService } from 'src/app/shared/services/auth.service';


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
  resetPasswordForm!:FormGroup
  loginDto: LoginDto = {} as LoginDto;
  hasError: boolean = false;
  returnUrl!: string;
  subs = new SubSink();
  isLoading: any = false;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  changePasswordShow: boolean =false
  resetModalShow: boolean =false;
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
        // [
        //   Validators.required,
        //   Validators.pattern(/^(?:88)?[0-9]{11}$/),
        //   Validators.minLength(11),
        //   Validators.maxLength(11),
        // ],
      ],

      password: [
        this.defaultAuth.password,
        // Validators.compose([
        //     Validators.required,
        //     CustomValidators.startsWithUppercase,
        //     CustomValidators.isAtLeast6Characters,
        //     CustomValidators.includesSpecialCharacter,
        //     CustomValidators.includesNumber,

        // ]),
      ],
    });

    this.resetPasswordForm = this.fb.group({
      username:['', Validators.required],
      newPassword:[''],
      confirmPassword:['']
    })

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
      const username = this.formControl['mobileNo'].value;
      const password = this.formControl['password'].value;
      this.loginDto.userName = username;
      this.loginDto.email = '';
      this.loginDto.password = password;
      this.loginDto.rememberMe = false;

      try {
        this.authService
          .loginByUserDto(this.loginDto)
          .subscribe((loginResponse: LoginResponseDto) => {
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
                      doctorName: doctorDto.fullName,
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
                    this.handleProfileError(doctorError, loginResponse);
                  }
                );
            }
            if (
              loginResponse.success &&
              loginResponse.roleName[0] == 'Patient'
            ) {
              this.isLoading = false;
              this.subs.sink = this.PatientProfileService.getByUserName(
                loginResponse.userName ? loginResponse.userName : ''
              ).subscribe(
                (patientDto: PatientProfileDto) => {
                  let saveLocalStorage = {
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
                  this.handleProfileError(patientError, loginResponse);
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
  private handleProfileError(error: any, loginResponse: any): void {
    if (loginResponse) {
      this.ToasterService.customToast(String(loginResponse.message), 'error');
      return
    } else {
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
  }
  resetModal(){
    this.resetModalShow =!this.resetModalShow
  }

  resetPassword(){
    try {
       this.UserAccountsService.isUserExistsByUserName(this.resetPasswordForm.get('username')?.value).subscribe({
        next: (res)=> {console.log(res);
        }
       })
    } catch (error) {
      
    }
  }



  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
