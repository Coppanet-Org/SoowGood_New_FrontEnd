
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { DoctorProfileDto, UserSignUpResultDto } from 'src/app/proxy/dto-models';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { DoctorProfileService, OtpService, UserAccountsService } from 'src/app/proxy/services';
import { SubSink } from 'SubSink';

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
  userInfoModal: boolean = false;
  doctorProfileDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  newCreatedProfileDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  completeProfileInfoModal: boolean = false
  receivedFormData!: FormGroup;



  constructor(

    private fb: FormBuilder,
    // private cdRef: ChangeDetectorRef,
    private otpService: OtpService,
    private userAccountService: UserAccountsService,
    private doctorProfileService: DoctorProfileService,
    private toasterService: ToasterService
  ) { }

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
      password: "",

    })
  }
  sendOtp() {
    console.log("call");

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
    else {
      console.log("Pin should be 4 character");
    }
  }
  sendUserInfo() {
    this.isLoading = true;
    let userType = this.formGroup?.value.userTypeName
    let password = this.userInfoForm.value.password;
    let userInfo = {
      "tenantId": "",
      "userName": this.mobile,
      "name": this.userInfoForm?.value.name,
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
          console.log(res);
          this.isLoading = false
          if (userType === 'Doctor') {
            this.doctorProfileDto.userId = res.userId;
            this.doctorProfileDto.fullName = res.name;
            this.doctorProfileDto.email = res.email;
            this.doctorProfileDto.mobileNo = res.phoneNumber;
            this.doctorProfileDto.isActive = res.isActive;

            this.doctorProfileService.create(this.doctorProfileDto)
              .subscribe((profRes: any) => {
                this.subs.sink = this.doctorProfileService.getByUserId(profRes.userId)
                  .subscribe((doctorDto: DoctorProfileDto) => {
                    this.newCreatedProfileDto = doctorDto;
                    //console.log(this.newCreatedProfileDto);
                  })
                this.completeProfileInfoModal = true
              })
          }
          else if (userType === 'Agent') {

          }
          else if (userType === 'Patient') {

          }

          console.log(res);
        } else {
          res.message?.map((e: string) =>
            this.toasterService.error(e), {
            position: 'bottom-center'
          })

        }
      },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      );
  }


  handleFormData(formData: FormGroup) {
    // this.receivedFormData=formData.value;

    this.newCreatedProfileDto.doctorTitle = formData.value.doctorTitle;
    // this.newCreatedProfileDto.fullName = formData.value.fullName;
    // this.newCreatedProfileDto.gender = formData.controls['gender'].value;
    // this.newCreatedProfileDto.dateOfBirth = formData.controls['dateOfBirth'].value;
    // this.newCreatedProfileDto.maritalStatus = formData.controls['maritalStatus'].value;
    // this.newCreatedProfileDto.address = formData.controls['address'].value;
    // this.newCreatedProfileDto.city = formData.controls['city'].value;
    // this.newCreatedProfileDto.country = formData.controls['country'].value;
    // this.newCreatedProfileDto.zipCode = formData.controls['zipCode'].value;
    // this.newCreatedProfileDto.bmdcRegNo = formData.controls['bmdcRegNo'].value;
    // this.newCreatedProfileDto.bmdcRegExpiryDate = formData.controls['bmdcRegExpiryDate'].value;
    // this.newCreatedProfileDto.specialityId = formData.controls['specialties'].value;
    // this.newCreatedProfileDto.identityNumber = formData.controls['identityNumber'].value;


    console.log({ ...formData.value, ...this.doctorProfileDto });

    this.doctorProfileService.update({ ...formData.value, ...this.newCreatedProfileDto }).subscribe((res) => {
    //this.doctorProfileService.update(this.newCreatedProfileDto).subscribe((res) => {

      console.log("hello", res);
    })

    // Do whatever you want with the form data received from the child
  }


}






// this.userAccountService.signupUserByUserDtoAndPasswordAndRole(userInfo,password,userType).subscribe((res: any) => {
//   console.log(res);

//         let pres = JSON.parse(res)
//           if (!pres.success) {
//             this.completeProfileInfoModal = true
//             this.isLoading = false
//             this.toastService.error(pres.message?.map((e:string)=>e),{
//               position: 'bottom-center'
//             })
//           } else{
//               this._router.navigate([userType.toLowerCase()])
//               this.toastService.success(pres.message,{
//                 position: 'bottom-center'
//               })
//               this.isLoading = false
//           }
//         },
//         (err) => {
//           this.isLoading = false;
//           console.log(err);
//         }
//       );
//   }


//   updateUserInfo(){

//   }
// }
