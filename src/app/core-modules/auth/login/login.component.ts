import { PermissionService } from '@abp/ng.core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorProfileService, UserAccountsService } from '../../../proxy/services';
import { SubSink } from 'SubSink';
import { DoctorProfileDto, LoginDto, LoginResponseDto } from '../../../proxy/dto-models';
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
    private doctorProfileService: DoctorProfileService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
    private toasterService: ToasterService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.initForm();
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
    try {
      this.authService
        .loginByUserDto(this.loginDto)
        .subscribe((loginResponse: LoginResponseDto) => {
          if (loginResponse.success) {            
            this.subs.sink = this.doctorProfileService.getByUserName(loginResponse.userName ? loginResponse.userName : "")
              .subscribe((doctorDto: DoctorProfileDto) => {
                let userType = (doctorDto.isActive == false ? (loginResponse.roleName.toString() + '/profile-settings/basic-info') : (loginResponse.roleName.toString()));
                this._router.navigate([userType.toLowerCase()], {
                  state: { data: doctorDto } // Pass the 'res' object as 'data' in the state object
                }).then(r => r)
                this.toasterService.success(loginResponse.message ? loginResponse.message : ""), {
                  position: 'bottom-center'
                }
              });
          }
          else {
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
