import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService, UserAccountsService } from 'src/app/proxy/services';
import { SubSink } from 'SubSink';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],

})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  userInfoForm!: FormGroup;
  mobile: string = '';
  userTYpe: string = '';
  otp?: number;
  errMsg: string = '';
  isValid = true;
  showError = true;
  subs = new SubSink();
  isQueryParam: boolean = false;
  isLoading = false;
  selectedUserType: string = '';
  otpModal: boolean = false;
  userInfoModal:boolean= false;

  constructor(
    private fb: FormBuilder,
    // private cdRef: ChangeDetectorRef,
    private toastService: HotToastService,
    private _router :Router,
    private otpService: OtpService,
    private userAccountService : UserAccountsService
  ) {}

  ngOnInit(): void {
    this.loadForm();  
  }

  loadForm() {
    this.formGroup = this.fb.group({
      mobile: '',
      otp: '',
      userTypeName: ''
    });
    this.userInfoForm = this.fb.group({
      name: "",
      email: "",
      password:"",
      
    })
  }
  sendOtp() {

    const formData = this.formGroup?.value;
    this.mobile = formData.mobile
    this.isLoading = true
    this.subs.sink = this.otpService
      .applyOtpByClientKeyAndMobileNo('SoowGood_App', formData.mobile)
      .subscribe(
        (res: boolean) => {
          if (res) {
            this.otpModal = res;
            this.isLoading = false
          } else {
            console.log("Otp cann't be generated!");
          }
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      );
  }

  verify() {
    let otp = this.otp;
    if (otp) {
      this.subs.sink = this.otpService
      .varifyOtp(Number(otp))
      .subscribe((res: boolean) => {
        if (res) {
          this.userInfoModal = res
        } else {
          this.errMsg = 'Invalid Otp!';
          console.log(res);
        }
      });
    }

 
  }
  onOtpChange(pin: any) {
    if (pin.length == 4) {
      this.otp = pin;
      this.verify()
    }
    else{
      console.log("Pin should be 4 character");
    }
  }
  sendUserInfo(){
    this.isLoading = true;
    let userType = this.formGroup?.value.userTypeName
    let password = this.userInfoForm.value.password;
    let userInfo ={      
      "tenantId": "", //
      "userName": this.mobile,
      "name": this.userInfoForm?.value.name,
      "surname": "", //
      "email": this.userInfoForm.value.email,
      "emailConfirmed": true, //
      "phoneNumber": this.mobile,
      "phoneNumberConfirmed": true,
      "isActive": true, //if doctor & agent then false
      "lockoutEnabled": false, //
      "lockoutEnd": "2023-07-16T07:38:44.382Z", //
      "concurrencyStamp": "" //
    }

    
this.userAccountService
      .signupUserByUserDtoAndPasswordAndRole(userInfo,password,userType)
      .subscribe((res: any) => {
        let pres = JSON.parse(res)
          if (!pres.success) {
            console.log(pres);
            this.isLoading = false
            this.toastService.error(pres.message,{
              position: 'bottom-center'
            })
          } else{
              this._router.navigate([userType.toLowerCase()])   
              this.toastService.success(pres.message,{
                position: 'bottom-center'
              })
              this.isLoading = false
          }
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      );
  }
}
