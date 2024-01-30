import { AgentProfileService } from './../../../../proxy/services/agent-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AgentProfileDto, LoginResponseDto } from 'src/app/proxy/dto-models';
import { UserAccountsService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppAuthService } from '../../../../auth-services/app-auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { SubSink } from 'subsink';
import { UserProfile } from '../../../../auth-models/user.model';
import { CustomValidators } from 'src/app/shared/utils/auth-helper';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss'],
})
export class AgentLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading!: boolean;
  formSubmitted = false;
  hasError!: boolean;
  errorMessage!: string;
  defaultAuth: any = {
    mobileNo: '',
    password: '',
  };
  subs = new SubSink();
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  constructor(
    private ToasterService: TosterService,
    private UserAuthService: UserAccountsService,
    private appAuthService: AppAuthService,
    private oAuthService: OAuthService,
    private AgentProfileService: AgentProfileService,
    private NormalAuth: AuthService,
    private _router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.fb.group({
      mobileNo: [this.defaultAuth.mobileNo, Validators.required],
      password: [
        this.defaultAuth.password,
        Validators.compose([Validators.required]),
      ],
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      this.ToasterService.customToast(
        'Please filled all required field',
        'warning'
      );
      return;
    }
    this.isLoading = true;
    let loginResponseData: LoginResponseDto;
    const username = this.loginForm.value.mobileNo;
    const password = this.loginForm.value.password;
    this.oAuthService.oidc = false;
    let agentInfo = {
      userName: this.loginForm.value.mobileNo,
      email: '',
      password: this.loginForm.value.password,
      rememberMe: false,
    };
    try {
      this.appAuthService.isLoadingSubject.next(true);
      this.oAuthService
        .fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password)
        .then((userInfo: UserProfile) => {
          this.formSubmitted = false;
          if (userInfo) {
            //const userModel = this.appAuthService.createUserModel(userInfo);
            //var un = username.split('@')[0];

            this.UserAuthService.loginByUserDto(agentInfo)
              .pipe(
                catchError((error: any) => this.handleLoginError(error)),
                switchMap((loginResponse: any) => {
                  loginResponseData = loginResponse;

                  if (!loginResponse.success) {
                    this.hasError = true;
                    this.ToasterService.customToast(
                      loginResponse.message || ' ',
                      'error'
                    );
                    return throwError(loginResponse.message || 'Login failed');
                  }
                  return this.AgentProfileService.getByUserName(
                    loginResponse.userName || ''
                  );
                }),
                catchError((error: any) => this.handleProfileError(error))
              )
              .subscribe((agentDto: any) => {
                console.log(agentDto);
                const saveLocalStorage = {
                  fullName: agentDto.fullName,
                  userId: agentDto.userId,
                  id: agentDto.id,
                  userType: loginResponseData.roleName.toString().toLowerCase(),
                };
                this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
                const userType = agentDto.isActive
                  ? loginResponseData.roleName.toString().toLowerCase()
                  : (
                      loginResponseData.roleName.toString() +
                      '/profile-settings'
                    ).toLowerCase();
                this._router
                  .navigate([userType], {
                    state: { data: agentDto },
                  })
                  .then(() =>
                    this.ToasterService.customToast(
                      loginResponseData.message || ' ',
                      'success'
                    )
                  );
              });
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.error?.error_description);

          this.errorMessage = err.error?.error_description;
        });
    } catch (error: any) {
      console.log(error);

      this.hasError = true;
      if (error.message === "'tokenEndpoint' should not be null") {
        this.ToasterService.customToast(error.message || ' ', 'success');
      }
    }
  }
  handleLoginError(error: any): any {
    this.isLoading = false;
  }
  handleProfileError(error: any): any {
    this.isLoading = false;
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
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
