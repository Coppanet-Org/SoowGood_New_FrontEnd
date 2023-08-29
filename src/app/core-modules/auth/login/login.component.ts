import { TosterService } from './../../../shared/services/toster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DoctorProfileService,
  UserAccountsService,
} from '../../../proxy/services';
import { SubSink } from 'SubSink';
import {
  DoctorProfileDto,
  LoginDto,
  LoginResponseDto,
} from '../../../proxy/dto-models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { catchError, switchMap, tap, throwError } from 'rxjs';
import { PermissionService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';

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
    this.loginForm = this.fb.group({
      mobileNo: [
        this.defaultAuth.mobileNo,
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(100),
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
    if (!this.loginForm.valid && !this.loginForm.touched) {
      this.ToasterService.customToast(
        'Please filled all required field',
        'warning'
      );
      return;
    }
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
        .loginByUserDto(this.loginDto).subscribe((loginResponse: LoginResponseDto) => {
          if (loginResponse.success) {
            this.subs.sink = this.doctorProfileService.getByUserName(loginResponse.userName ? loginResponse.userName : "")
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
                  userType: loginResponse.roleName.toString().toLowerCase()
                }
                this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
                if (doctorDto.profileStep == 1 || doctorDto.profileStep == 2) {
                  userType = '/signup';
                }
                else {
                  userType = (doctorDto.isActive ? (loginResponse.roleName.toString()) : (loginResponse.roleName.toString() + '/profile-settings/basic-info'));
                }
                this._router.navigate([userType.toLowerCase()], {
                  state: { data: doctorDto } // Pass the 'res' object as 'data' in the state object
                }).then(r => {
                  this.ToasterService.customToast(loginResponse.message ? loginResponse.message : " ", 'success')
                });
              });
          }
          else {
            this.hasError = true;
            this.ToasterService.customToast(loginResponse.message ? loginResponse.message : " ", 'error');
          }
        });
    } catch (error: any) {
      this.hasError = true;
      if (error.message === "'tokenEndpoint' should not be null") {
        this.errorMessage = 'Identity server is not running';
      }
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
