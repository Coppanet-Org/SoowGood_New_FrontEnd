import { PermissionService } from '@abp/ng.core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAccountsService } from '../../../proxy/services';
import { SubSink } from 'SubSink';
import { LoginDto, LoginResponseDto } from '../../../proxy/dto-models';
//import { TosterService } from 'src/app/shared/services/toster.service';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  defaultAuth: any = {
    mobileNo: '', password: '',
  };

  errorMessage: string = '';
  loginForm!: FormGroup;
  loginDto: LoginDto = {} as LoginDto;
  hasError: boolean = false;
  returnUrl!: string;
  subs = new SubSink();

  constructor(
    private authService: UserAccountsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private toasterService: ToasterService,
    private permissionService: PermissionService
  ) {
    //this.isLoading$ = this.authService.isLoading$;
    //if (this.authService.currentUserValue) {
    //  this.router.navigate(['/']);
    //}
  }

  ngOnInit(): void {
    //if (isDevMode()) {
    //  //this.defaultAuth = { email: 'admin@abp.io', password: '1q2w3E*' };
    //  this.defaultAuth = { email: '', password: '' };
    //}

    this.initForm();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      mobileNo: [
        this.defaultAuth.mobileNo,
        Validators.compose([
          Validators.required,
          //Validators.email,
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

  submit(): void {
    this.errorMessage = '';
    this.hasError = false;
    const username = this.formControl['mobileNo'].value;
    const password = this.formControl['password'].value;
    this.loginDto.userName = username;
    this.loginDto.email = "";
    this.loginDto.password = password;
    this.loginDto.rememberMe = false;
    
    //this.oAuthService.oidc = false;
    try {
      //this.authService.isLoadingSubject.next(true);
      this.authService
        .loginByUserDto(this.loginDto)
        .subscribe((loginResponse: LoginResponseDto) => {
          if (loginResponse.success) {
            //this.router.navigate([this.returnUrl]);
            this._router.navigate([loginResponse.roleName], {
              state: { data: loginResponse } // Pass the 'res' object as 'data' in the state object
            })
              .then(r => r)
            this.toasterService.success(loginResponse.message ? loginResponse.message : ""), {
              position: 'bottom-center'
            }
          } else {
            this.hasError = true;
          }
        });
    } catch (error: any) {
      this.hasError = true;
      if (error.message === '\'tokenEndpoint\' should not be null') {
        this.errorMessage = 'Identity server is not running';
      }
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
