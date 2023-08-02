
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUpResultDto } from 'src/app/proxy/dto-models';
import { DoctorTitle } from 'src/app/proxy/enums';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { DoctorProfileService, OtpService, UserAccountsService } from 'src/app/proxy/services';
import { ListItem } from 'src/app/shared/model/common-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { SubSink } from 'SubSink';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  userInfoForm!: FormGroup;
  docId: any;
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
  userInfoModal: boolean = false;
  doctorProfileDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  newCreatedProfileDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  completeProfileInfoModal: boolean = false
  receivedFormData!: FormGroup;
  titleList: ListItem[] = [];



  constructor(

    private fb: FormBuilder,
    private otpService: OtpService,
    private userAccountService: UserAccountsService,
    private doctorProfileService: DoctorProfileService,
    private toasterService: ToasterService,
    private _router: Router,
    private NormalAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.titleList = CommonService.getEnumList(DoctorTitle);
  }

  loadForm() {
    this.formGroup = this.fb.group({
      mobile: '',
      otp: '',
      userTypeName: ''
    });
    this.userInfoForm = this.fb.group({
      fullName: ["", Validators.required],
      doctorTitle: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
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
          }
        },
        (err) => {
          this.isLoading = false;
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
          }
        });
    }


  }
  onOtpChange(pin: any) {
    if (pin.length == 4) {
      this.otp = pin;
      this.verify()
    }
    else {
      console.log("Pin should be 4 character");
    }
  }
  sendUserInfo() {
    this.isLoading = true;
    let userType = this.formGroup?.value.userTypeName
    let password = this.userInfoForm.value.password;
    let title = this.userInfoForm.value.doctorTitle;
    let userInfo = {
      "tenantId": "",
      "userName": this.mobile,
      "name": this.userInfoForm?.value.fullName,
      "surname": "",
      "email": this.userInfoForm.value.email,
      "emailConfirmed": true,
      "phoneNumber": this.mobile,
      "phoneNumberConfirmed": true,
      "isActive": true,
      "lockoutEnabled": false,
      "lockoutEnd": "2023-07-16T07:38:44.382Z",
      "concurrencyStamp": ""
    }


    this.userAccountService
      .signupUserByUserDtoAndPasswordAndRole(userInfo, password, userType)
      .subscribe((res: UserSignUpResultDto) => {
        if (res.success) {
          this.isLoading = false
          if (userType === 'Doctor') {
            this.doctorProfileDto.doctorTitle = title;
            this.doctorProfileDto.userId = res.userId;
            this.doctorProfileDto.fullName = res.name;
            this.doctorProfileDto.email = res.email;
            this.doctorProfileDto.mobileNo = res.phoneNumber;
            this.doctorProfileDto.isActive = false;
            this.doctorProfileDto.profileStep = 1;
            this.doctorProfileDto.createFrom = "Web";
            this.doctorProfileService.create(this.doctorProfileDto)
              .subscribe((profRes: any) => {
                this.subs.sink = this.doctorProfileService.getByUserId(profRes.userId)
                  .subscribe((doctorDto: DoctorProfileInputDto) => {
                    this.newCreatedProfileDto = doctorDto;
                    this.completeProfileInfoModal = true
                    this.docId = doctorDto.id
                    let saveLocalStorage = {
                      identityNumber: doctorDto.identityNumber,
                      bmdcRegNo: doctorDto.bmdcRegNo,
                      isActive: doctorDto.isActive,
                      userId: doctorDto.userId,
                      id: doctorDto.id,
                      profileStep: doctorDto.profileStep,
                      createFrom: doctorDto.createFrom
                    }
                    this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
                  })
              })
          }
          else if (userType === 'Agent') {

          }
          else if (userType === 'Patient') {

          }

        } else {
          res.message?.map((e: string) =>
            this.toasterService.error(e), {
            position: 'bottom-center'
          })

        }
      },
        (err) => {
          this.isLoading = false;
        }
      );
  }


  handleFormData(formData: FormGroup) {
    const doctorProfileInput: DoctorProfileInputDto = {
      degrees: [],
      doctorSpecialization: [],
      ...formData,
      id: this.docId
    };
    doctorProfileInput.doctorTitle = this.doctorProfileDto.doctorTitle;
    doctorProfileInput.userId = this.doctorProfileDto.userId;
    doctorProfileInput.fullName = this.doctorProfileDto.fullName;
    doctorProfileInput.email = this.doctorProfileDto.email;
    doctorProfileInput.mobileNo = this.doctorProfileDto.mobileNo;
    doctorProfileInput.isActive = this.doctorProfileDto.isActive;
    doctorProfileInput.profileStep = 1;
    doctorProfileInput.createFrom = "Web";
    let userType = this.formGroup?.value.userTypeName + '/profile-settings/basic-info'
    this.doctorProfileService.update(doctorProfileInput).subscribe((res) => {
      if (res) {
        this._router.navigate([userType.toLowerCase()], {
          state: { data: res } // Pass the 'res' object as 'data' in the state object
        }).then(r => r)
        this.toasterService.success("Registration Successful"), {
          position: 'bottom-center'
        }
      }
    });
  }
}





