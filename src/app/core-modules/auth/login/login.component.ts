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
        .pipe(
          catchError((error: any) => this.handleLoginError(error)),
          switchMap((loginResponse: LoginResponseDto) => {
            loginResponseData = loginResponse;
            if (!loginResponse.success) {
              this.hasError = true;
              this.ToasterService.customToast(
                loginResponse.message || ' ',
                'error'
              );
              return throwError(loginResponse.message || 'Login failed');
            }
            return this.doctorProfileService.getByUserName(
              loginResponse.userName || ''
            );
          }),
          catchError((error: any) => this.handleProfileError(error))
        )
        .subscribe((doctorDto: DoctorProfileDto) => {
          const saveLocalStorage = {
            identityNumber: doctorDto.identityNumber,
            bmdcRegNo: doctorDto.bmdcRegNo,
            isActive: doctorDto.isActive,
            userId: doctorDto.userId,
            id: doctorDto.id,
            profileStep: doctorDto.profileStep,
            createFrom: doctorDto.createFrom,
          };
          this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
          const userType = doctorDto.isActive
            ? loginResponseData.roleName.toString().toLowerCase()
            : (
                loginResponseData.roleName.toString() +
                '/profile-settings/basic-info'
              ).toLowerCase();
          this._router
            .navigate([userType], {
              state: { data: doctorDto }, 
            })
            .then(() =>
              this.ToasterService.customToast(
                loginResponseData.message || ' ',
                'success'
              )
            );
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
