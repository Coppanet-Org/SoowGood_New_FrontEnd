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
import { throwError } from 'rxjs';

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
  formSubmitted:boolean = false
  errorMessage: string = '';
  loginForm!: FormGroup;
  loginDto: LoginDto = {} as LoginDto;
  hasError: boolean = false;
  returnUrl!: string;
  subs = new SubSink();
  isLoading: any = false;
  constructor(
    private authService: UserAccountsService,
    private doctorProfileService: DoctorProfileService,
    private PatientProfileService: PatientProfileService,
    private fb: FormBuilder,
    private _router: Router,
    private ToasterService: TosterService,
    private NormalAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get formControl() {
    return this.loginForm.controls;
  }

  initForm() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/;
    this.loginForm = this.fb.group({
      mobileNo: [
        this.defaultAuth.mobileNo],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }
  private handleLoginError(error: any) {
    this.hasError = true;
    if (error.message === "'tokenEndpoint' should not be null") {
      this.errorMessage = 'Identity server is not running';
    }
    return throwError(error);
  }

  private handleProfileError(error: any) {
    return throwError(error);
  }
  onSubmit(): void {
    this.formSubmitted = true
    if (!this.loginForm.valid && !this.loginForm.touched) {
      this.ToasterService.customToast(
        'Please filled all required field',
        'warning'
      );
      this.isLoading = false;
      return;
    } else {
      if (this.loginForm.invalid) {
        this.isLoading = false;
        return
      }
      this.formSubmitted = false
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
      let loginResponseData: LoginResponseDto;


      try {
        this.authService
          .loginByUserDto(this.loginDto)
          .subscribe((loginResponse: LoginResponseDto) => {
            console.log(loginResponse);

            if (loginResponse.success && loginResponse.roleName[0] == 'Doctor') {
              this.isLoading = false;
              this.subs.sink = this.doctorProfileService.getByUserName(loginResponse.userName ? loginResponse.userName : '')
                .subscribe((doctorDto: DoctorProfileDto) => {
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
                      state: { data: doctorDto }, // Pass the 'res' object as 'data' in the state object
                    })
                    .then((r) => {
                      this.ToasterService.customToast(
                        loginResponse.message ? loginResponse.message : ' ',
                        'success'
                      );
                    });
                });

            }

            else if (loginResponse.success && loginResponse.roleName[0] == 'Patient') {
              this.isLoading = false;
              this.subs.sink = this.PatientProfileService.getByUserName(
                loginResponse.userName ? loginResponse.userName : ''
              )
                .subscribe((patientDto: PatientProfileDto) => {
                let saveLocalStorage = {
                  userId: patientDto.userId,
                  id: patientDto.id,
                  userType: loginResponse.roleName.toString().toLowerCase(),
                };
                this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
                let userType = loginResponse.roleName.toString() + '/dashboard';

                this._router
                  .navigate([userType.toLowerCase()], {
                    state: { data: patientDto }, // Pass the 'res' object as 'data' in the state object
                  })
                  .then((r) => {
                    this.ToasterService.customToast(
                      loginResponse.message ? loginResponse.message : ' ',
                      'success'
                    );
                  });
              });
            }

            else {
              this.isLoading = false;
              this.ToasterService.customToast(
                loginResponse.message ? loginResponse.message : ' ',
                'error'
              );
            }
          })



      } catch (error: any) {
        this.hasError = true;
        if (error.message === "'tokenEndpoint' should not be null") {
          this.errorMessage = 'Identity server is not running';
        }
      }
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
