
import { ToasterService } from '@abp/ng.theme.shared';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DegreeDto, DoctorDegreeDto, DoctorProfileDto, DoctorSpecializationDto, SpecializationDto, UserSignUpResultDto } from 'src/app/proxy/dto-models';
import { Gender, MaritalStatus, DoctorTitle } from 'src/app/proxy/enums';
import { DoctorDegreeInputDto, DoctorProfileInputDto, DoctorSpecializationInputDto } from 'src/app/proxy/input-dto';
import { DoctorProfileService, OtpService, UserAccountsService, SpecialityService, DoctorDegreeService, SpecializationService, DoctorSpecializationService, DegreeService, DocumentsAttachmentService } from 'src/app/proxy/services';
import { ListItem } from 'src/app/shared/model/common-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { SubSink } from 'SubSink';
import { TosterService } from '../../../shared/services/toster.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  @ViewChild('attachments') attachment: any;
  @ViewChild('idAttachments') idAttachment: any;
  @ViewChild('spAttachments') spAttachment: any;
  //subs = new SubSink();
  fileList: File[] = [];
  fileNames: any[] = [];

  idFileList: File[] = [];
  idFileNames: any[] = [];

  spFileList: File[] = [];
  spFileNames: any[] = [];

  fileData = new FormData();
  idFileData = new FormData();
  spFileData = new FormData();
  imagePath: any;
  upload: any;
  auth: any;
  profPicUrl: any;
  profNidUrl: any;
  profilePic: string = '';
  profileNid: string = '';

  private apiUrl = `${environment.apis.default.url}/api`;
  public picUrl = `${environment.apis.default.url}/`;



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
  forStepUpdateDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  newCreatedProfileDto: DoctorProfileInputDto = {} as DoctorProfileInputDto;
  completeDegreeSpecilizationInfoModal: boolean = false
  completeDocumentUpload: boolean = false
  completeUploadDocumen: boolean = false
  receivedFormData!: FormGroup;
  titleList: ListItem[] = [];

  genderList: ListItem[] = [];
  maritalOptions: ListItem[] = [];
  specialties: any = [];
  profileStep: any;

  doctorName: any;

  //education & specialization

  degreeList: DegreeDto[] = [];
  specializationList: SpecializationDto[] = [];
  doctorDegreeList: DoctorDegreeDto[] = [];
  doctorDegrees: DoctorDegreeDto[] = [];
  doctorDegreeInputs: DoctorDegreeInputDto[] = [];
  doctorSpecializationList: DoctorSpecializationDto[] = [];
  doctorSpecializations: DoctorSpecializationDto[] = [];
  doctorSpecializationInputs: DoctorSpecializationInputDto[] = [];
  degreeName: any;
  degreeMendatoryMassage: any;
  spMendatoryMassage: any;
  documentMassage: any;
  specializationName: any;
  specialityName: any;

  detectChnage: boolean = false;
  durationList: any = [
    { id: 1, name: '1 year' },
    { id: 2, name: '2 year' },
    { id: 3, name: '3 year' },
    { id: 4, name: '4 year' },
    { id: 5, name: '5 year' },
  ];
  formDegree!: FormGroup;
  formSpecialization!: FormGroup;
  doctorId: any;
  specialityId: any;

  constructor(

    private fb: FormBuilder,
    private otpService: OtpService,
    private userAccountService: UserAccountsService,
    private doctorProfileService: DoctorProfileService,
    private toasterService: ToasterService,
    private _router: Router,
    private normalAuth: AuthService,
    private doctorSpeciality: SpecialityService,


    private degreeService: DegreeService,

    private tosterService: TosterService,
    private doctorDegreeService: DoctorDegreeService,
    private specializationService: SpecializationService,
    private specialityService: SpecialityService,
    private doctorSpecializationService: DoctorSpecializationService,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,

    private doctorProfilePicService: DocumentsAttachmentService,
  ) { }

  ngOnInit(): void {

    let authInfo = this.normalAuth.authInfo();
    if (authInfo != null) {
      this.doctorId = this.normalAuth.authInfo().id;
      this.specialityId = this.normalAuth.authInfo().specialityId;
      this.profileStep = this.normalAuth.authInfo().profileStep;
      if (this.profileStep == 1) {
        this.otpModal = false;
        this.userInfoModal = false;
        this.completeDegreeSpecilizationInfoModal = true;
        this.doctorName = this.normalAuth.authInfo().doctorName;
        this.degreeService.getList().subscribe((res) => {
          this.degreeList = res;
        });
        this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
          this.specialityName = n.specialityName;
          if (this.specialityId > 1 && this.specialityId > 2) {
            this.degreeMendatoryMassage = "You must provide your degree info as " + this.specialityName + " specialist.";
          }
          else if (this.specialityId == 1) {
            this.degreeList = this.degreeList.filter(d => d.id == 1);
          }
          else if (this.specialityId == 1) {
            this.degreeList = this.degreeList.filter(d => d.id == 2);
          }
          this.subs.sink = this.specializationService.getListBySpecialtyId(this.specialityId).subscribe((res) => {
            this.specializationList = res;
            if (this.specialityId == 1) {
              this.specializationList = this.specializationList.filter(s => s.specialityId == 1);
              let specId = this.specializationList.find(sp => sp.specialityId == 1);
              let uniId = this.GenerateId();
              let specialzDataForMbbs = {
                id: +uniId,
                specializationId: specId?.id,
                specializationName: specId?.specializationName,
                doctorId: this.doctorId,
                specialityId: this.specialityId,
                specialityName: this.specialityName
              };
              this.doctorSpecializations.push(specialzDataForMbbs);
            }
            else if (this.specialityId == 2) {
              this.specializationList = this.specializationList.filter(s => s.specialityId == 2);
              let specId = this.specializationList.find(sp => sp.specialityId == 2);
              let uniId = this.GenerateId();
              let specialzDataBDS = {
                id: +uniId,
                specializationId: specId?.id,
                specializationName: specId?.specializationName,
                doctorId: this.doctorId,
                specialityId: this.specialityId,
                specialityName: this.specialityName
              };
              this.doctorSpecializations.push(specialzDataBDS);
            }
            else {
              this.spMendatoryMassage = "You must select specializaion for " + this.specialityName + ". Max. 3";
            }

          });
        });


      }

      if (this.profileStep == 2) {
        this.otpModal = false;
        this.userInfoModal = false;
        this.completeDocumentUpload = true;
        this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
          this.specialityName = n.specialityName;
          if (this.specialityId > 1 && this.specialityId > 2) {
            this.documentMassage = "(You must upload document as you are a " + this.specialityName + " specialist.)";
          }
          else {
            this.documentMassage = "(Just upload a document which can prove that, you a Doctor.)";
          }
        });
        //this.doctorName = this.normalAuth.authInfo().doctorName;
        //this.degreeService.getList().subscribe((res) => {
        //  this.degreeList = res;
        //});
        //this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
        //  this.specialityName = n.specialityName;
        //  if (this.specialityId > 1 && this.specialityId > 2) {
        //    this.degreeMendatoryMassage = "You must provide your degree info as " + this.specialityName + " specialist.";
        //  }
        //  else if (this.specialityId == 1) {
        //    this.degreeList = this.degreeList.filter(d => d.id == 1);
        //  }
        //  else if (this.specialityId == 1) {
        //    this.degreeList = this.degreeList.filter(d => d.id == 2);
        //  }
        //  this.subs.sink = this.specializationService.getListBySpecialtyId(this.specialityId).subscribe((res) => {
        //    this.specializationList = res;
        //    if (this.specialityId == 1) {
        //      this.specializationList = this.specializationList.filter(s => s.specialityId == 1);
        //      let specId = this.specializationList.find(sp => sp.specialityId == 1);
        //      let uniId = this.GenerateId();
        //      let specialzDataForMbbs = {
        //        id: +uniId,
        //        specializationId: specId?.id,
        //        specializationName: specId?.specializationName,
        //        doctorId: this.doctorId,
        //        specialityId: this.specialityId,
        //        specialityName: this.specialityName
        //      };
        //      this.doctorSpecializations.push(specialzDataForMbbs);
        //    }
        //    else if (this.specialityId == 2) {
        //      this.specializationList = this.specializationList.filter(s => s.specialityId == 2);
        //      let specId = this.specializationList.find(sp => sp.specialityId == 2);
        //      let uniId = this.GenerateId();
        //      let specialzDataBDS = {
        //        id: +uniId,
        //        specializationId: specId?.id,
        //        specializationName: specId?.specializationName,
        //        doctorId: this.doctorId,
        //        specialityId: this.specialityId,
        //        specialityName: this.specialityName
        //      };
        //      this.doctorSpecializations.push(specialzDataBDS);
        //    }
        //    else {
        //      this.spMendatoryMassage = "You must select specializaion for " + this.specialityName + ". Max. 3";
        //    }

        //  });
        //});


      }
    }
    this.loadForm();
    this.genderList = CommonService.getEnumList(Gender);

    this.doctorSpeciality.getList().subscribe((res) => {
      this.specialties = res;
    });
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
      doctorTitle: ["0", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],

      gender: ["0", Validators.required],
      dateOfBirth: ['', Validators.required],
      //maritalStatus: ["0", Validators.required],
      city: [null],
      country: [''],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      bmdcRegNo: ['', Validators.required],
      bmdcRegExpiryDate: ['', Validators.required],
      specialityId: ["0", Validators.required],
      identityNumber: ['', Validators.required],

    })
    this.formDegree = this.fb.group({
      zipCode: ['1216'],
      degreeId: ['0', Validators.required],
      duration: ['0', Validators.required],
      passingYear: ['', Validators.required],
      instituteName: ['', Validators.required],
      instituteCity: ['', Validators.required],
      instituteCountry: ['', Validators.required],
    });
    if (this.specialityId === 1) {
      this.formSpecialization = this.fb.group({
        specializationId: [1, Validators.required],
      });
    }
    else if (this.specialityId === 2) {
      this.formSpecialization = this.fb.group({
        specializationId: [2, Validators.required],
      });
    }
    else {
      this.formSpecialization = this.fb.group({
        specializationId: [0, Validators.required],
      });
    }
  }

  loadAuth() {
    let authInfo = this.normalAuth.authInfo();
    if (authInfo != null) {
      this.doctorId = this.normalAuth.authInfo().id;
      this.specialityId = this.normalAuth.authInfo().specialityId;
      this.profileStep = this.normalAuth.authInfo().profileStep;
      if (this.profileStep == 1) {
        this.otpModal = false;
        this.userInfoModal = false;
        this.completeDegreeSpecilizationInfoModal = true;
        this.doctorName = this.normalAuth.authInfo().doctorName;
        this.degreeService.getList().subscribe((res) => {
          this.degreeList = res;
        });
        this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
          this.specialityName = n.specialityName;
          if (this.specialityId > 1 && this.specialityId > 2) {
            this.degreeMendatoryMassage = "You must provide your degree info as " + this.specialityName + " specialist.";
          }
          else if (this.specialityId == 1) {
            this.degreeList = this.degreeList.filter(d => d.id == 1);
          }
          else if (this.specialityId == 1) {
            this.degreeList = this.degreeList.filter(d => d.id == 2);
          }
          this.subs.sink = this.specializationService.getListBySpecialtyId(this.specialityId).subscribe((res) => {
            this.specializationList = res;
            if (this.specialityId == 1) {
              this.specializationList = this.specializationList.filter(s => s.specialityId == 1);
              let specId = this.specializationList.find(sp => sp.specialityId == 1);
              let uniId = this.GenerateId();
              let specialzDataForMbbs = {
                id: +uniId,
                specializationId: specId?.id,
                specializationName: specId?.specializationName,
                doctorId: this.doctorId,
                specialityId: this.specialityId,
                specialityName: this.specialityName
              };
              this.doctorSpecializations.push(specialzDataForMbbs);
            }
            else if (this.specialityId == 2) {
              this.specializationList = this.specializationList.filter(s => s.specialityId == 2);
              let specId = this.specializationList.find(sp => sp.specialityId == 2);
              let uniId = this.GenerateId();
              let specialzDataBDS = {
                id: +uniId,
                specializationId: specId?.id,
                specializationName: specId?.specializationName,
                doctorId: this.doctorId,
                specialityId: this.specialityId,
                specialityName: this.specialityName
              };
              this.doctorSpecializations.push(specialzDataBDS);
            }
            else {
              this.spMendatoryMassage = "You must select specializaion for " + this.specialityName + ". Max. 3";
            }

          });
        });
      }
      if (this.profileStep == 2) {
        this.otpModal = false;
        this.userInfoModal = false;
        this.completeDocumentUpload = true;
        this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
          this.specialityName = n.specialityName;
          if (this.specialityId > 1 && this.specialityId > 2) {
            this.documentMassage = "(You must upload document as you are a " + this.specialityName + " specialist.)";
          }
          else {
            this.documentMassage = "(Just upload a document which can prove that, you a Doctor.)";
          }
        });   

      }
    }
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
    let gender = this.userInfoForm.value.gender;
    let dateOfBirth = this.userInfoForm.value.dateOfBirth;
    let address = this.userInfoForm.value.address;
    let city = this.userInfoForm.value.city;
    let zipCode = this.userInfoForm.value.zipCode;
    let country = this.userInfoForm.value.country;
    let bmdcRegNo = this.userInfoForm.value.bmdcRegNo;
    let bmdcRegExpiryDate = this.userInfoForm.value.bmdcRegExpiryDate;
    let specialityId = this.userInfoForm.value.specialityId;
    let identityNumber = this.userInfoForm.value.identityNumber;
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
            this.doctorProfileDto.gender = gender;
            this.doctorProfileDto.dateOfBirth = dateOfBirth;
            this.doctorProfileDto.address = address;
            this.doctorProfileDto.city = city;
            this.doctorProfileDto.zipCode = zipCode;
            this.doctorProfileDto.country = country;
            this.doctorProfileDto.bmdcRegNo = bmdcRegNo;
            this.doctorProfileDto.bmdcRegExpiryDate = bmdcRegExpiryDate;
            this.doctorProfileDto.specialityId = specialityId;
            this.doctorProfileDto.identityNumber = identityNumber;
            this.doctorProfileDto.isActive = false;
            this.doctorProfileDto.profileStep = 1;
            this.doctorProfileDto.createFrom = "Web";
            userType = userType + '/profile-settings/basic-info'
            this.doctorProfileService.create(this.doctorProfileDto)
              .subscribe((profRes: any) => {
                this.subs.sink = this.doctorProfileService.getByUserId(profRes.userId)
                  .subscribe((doctorDto: DoctorProfileInputDto) => {
                    this.newCreatedProfileDto = doctorDto;
                    this.completeDegreeSpecilizationInfoModal = true
                    this.docId = doctorDto.id
                    let saveLocalStorage = {
                      identityNumber: doctorDto.identityNumber,
                      doctorName: doctorDto.fullName,
                      bmdcRegNo: doctorDto.bmdcRegNo,
                      isActive: doctorDto.isActive,
                      userId: doctorDto.userId,
                      id: doctorDto.id,
                      specialityId: doctorDto.specialityId,
                      profileStep: doctorDto.profileStep,
                      createFrom: doctorDto.createFrom
                    }
                    this.normalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
                    if (this.normalAuth) {
                      this.loadAuth();
                    }
                    this.toasterService.success("Basic Inforamation Saved Successfully"),
                      { position: 'bottom-center' }
                    this.cdRef.detectChanges();
                  })
              })
          }
          else if (userType === 'Agent') { }
          else if (userType === 'Patient') { }

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

  handleComponent(event: boolean) {
    if (event) {
      this.cdRef.detectChanges();
    }
  }

  handleFormData(formData: FormGroup) {
    const doctorProfileInput: DoctorProfileInputDto = {
      degrees: [],
      doctorSpecialization: [],
      //...formData,

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
        let saveLocalStorage = {
          identityNumber: res.identityNumber,
          doctorName: res.fullName,
          bmdcRegNo: res.bmdcRegNo,
          isActive: res.isActive,
          userId: res.userId,
          id: res.id,
          specialityId: res.specialityId,
          profileStep: res.profileStep,
          createFrom: res.createFrom
        }
        this.normalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
        this._router.navigate([userType.toLowerCase()], {
          state: { data: res } // Pass the 'res' object as 'data' in the state object
        }).then(r => r)
        this.toasterService.success("Registration Successful"), {
          position: 'bottom-center'
        }
      }
    });
  }

  //Education And Specialization


  getDegreeName(event: any) {
    let t = event.target.value;
    this.subs.sink = this.degreeService.get(t).subscribe(n => {
      this.degreeName = n.degreeName;
    });
  }

  getSpName(event: any): void {
    let t = event.target.value;
    this.subs.sink = this.specializationService.get(t).subscribe(n => {
      this.specializationName = n.specializationName;
    });
  }

  addDegree() {
    let degreeId = this.formDegree.get('degreeId')?.value;
    let duration = this.formDegree.get('duration')?.value;

    let uniqueId = this.GenerateId();
    const newDegreeData = {
      ...this.formDegree.value,
      id: uniqueId,
      degreeId: Number(degreeId),
      degreeName: this.degreeName,
      duration: Number(duration),
      doctorId: this.doctorId,
    };

    if (!this.formDegree.valid && !this.formDegree.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.doctorDegrees.push(newDegreeData);
  }

  addSpecialization() {
    let spId = this.formSpecialization.get('specializationId')?.value;
    let specialityName = this.specialityName;

    let uniId = this.GenerateId();
    const spData = {
      ...this.formSpecialization.value,
      id: uniId,
      specializationId: Number(spId),
      specializationName: this.specializationName,
      doctorId: this.doctorId,
      specialityId: this.specialityId,
      specialityName: specialityName
    };

    if (!this.formSpecialization.valid && !this.formSpecialization.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.doctorSpecializations.push(spData);

  }

  remove(id: any): void {
    let objectIndex = 0;
    objectIndex = this.doctorDegrees.findIndex(
      (obj) => obj.id?.toString() === id
    );
    if (objectIndex > -1) {
      this.doctorDegrees.splice(objectIndex, 1);
    }
  }

  removeSp(id: any): void {
    let objectIndex = 0;
    objectIndex = this.doctorSpecializations.findIndex(
      (obj) => obj.id?.toString() === id
    );
    if (objectIndex > -1) {
      this.doctorSpecializations.splice(objectIndex, 1);
    }
  }

  saveDegreeSpecialization() {
    let x = 0;
    let y = +(this.doctorDegrees.length + this.doctorSpecializations.length);
    if (this.doctorDegrees.length === 0 || this.doctorSpecializations.length === 0) {
      this.toasterService.warn("You have to add your medical degees and specializations");
      return;
    }
    else if (this.doctorSpecializations.length > 3) {
      this.toasterService.warn("You are exeeding Specialization Limit.");
      return;
    }
    else if (this.specialityId > 1 && this.specialityId > 2 && this.doctorDegrees.length == 1) {
      this.toasterService.warn("You have to add your degrees according to you speciality");
      return;
    }
    else {
      this.doctorDegrees.forEach(d => {
        let ddDto: DoctorDegreeDto = {} as DoctorDegreeDto;
        ddDto.degreeId = d.degreeId;
        ddDto.doctorProfileId = this.doctorId;
        ddDto.duration = d.duration;
        ddDto.passingYear = d.passingYear;
        ddDto.instituteName = d.instituteName;
        ddDto.instituteCity = d.instituteCity;
        ddDto.instituteCountry = d.instituteCountry;
        this.doctorDegreeInputs.push(ddDto);

      });
      this.doctorSpecializations.forEach(s => {
        let spDto: DoctorSpecializationDto = {} as DoctorSpecializationDto;
        spDto.doctorProfileId = this.doctorId;;
        spDto.specialityId = s.specialityId;
        spDto.specializationId = s.specializationId;
        this.doctorSpecializationInputs.push(spDto);
      });
      this.subs.sink = this.doctorProfileService.get(this.doctorId).subscribe((doctorDto: DoctorProfileInputDto) => {
        if (doctorDto) {
          this.forStepUpdateDto.id = doctorDto.id;

          this.forStepUpdateDto.userId = doctorDto.userId;
          this.forStepUpdateDto.fullName = doctorDto.fullName;
          this.forStepUpdateDto.email = doctorDto.email;
          this.forStepUpdateDto.mobileNo = doctorDto.mobileNo;
          this.forStepUpdateDto.gender = doctorDto.gender;
          this.forStepUpdateDto.dateOfBirth = doctorDto.dateOfBirth;
          this.forStepUpdateDto.address = doctorDto.address;
          this.forStepUpdateDto.city = doctorDto.city;
          this.forStepUpdateDto.zipCode = doctorDto.zipCode;
          this.forStepUpdateDto.country = doctorDto.country;
          this.forStepUpdateDto.bmdcRegNo = doctorDto.bmdcRegNo;
          this.forStepUpdateDto.bmdcRegExpiryDate = doctorDto.bmdcRegExpiryDate;
          this.forStepUpdateDto.specialityId = doctorDto.specialityId;
          this.forStepUpdateDto.identityNumber = doctorDto.identityNumber;
          this.forStepUpdateDto.isActive = false;
          this.forStepUpdateDto.profileStep = 2;
          this.forStepUpdateDto.createFrom = "Web";
          this.forStepUpdateDto.degrees = this.doctorDegreeInputs;// .push(this.doctorDegrees);
          this.forStepUpdateDto.doctorSpecialization = this.doctorSpecializationInputs;

          this.subs.sink = this.doctorProfileService.update(this.forStepUpdateDto).subscribe((res: DoctorProfileDto) => {
            if (res) {
              this.completeDegreeSpecilizationInfoModal = false;
              this.completeDocumentUpload = true
              let saveLocalStorage = {
                identityNumber: res.identityNumber,
                doctorName: res.fullName,
                bmdcRegNo: res.bmdcRegNo,
                isActive: res.isActive,
                userId: res.userId,
                id: res.id,
                specialityId: res.specialityId,
                profileStep: res.profileStep,
                createFrom: res.createFrom,
                specializations:res.doctorSpecialization
              }
              this.normalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
              if (this.normalAuth) {
                this.loadAuth();
              }
              this.toasterService.success("Degree and Specializtion info updated Successfully"),
                { position: 'bottom-center' }
              this.cdRef.detectChanges();
            }
          });
        }
      });
    }
  }

  GenerateId(): string {
    return '_' + Math.random().toString().substring(2, 9);
  }

  uploadPic() {

    this.fileData.append("entityId", this.doctorId.toString());
    this.fileData.append("entityType", "Doctor");
    this.fileData.append("attachmentType", "ProfilePicture");
    this.fileData.append("directoryName", "DoctorProfilePicture\\" + this.doctorId.toString());
    if (this.fileList.length > 0) {
      for (let item of this.fileList) {
        let fileToUpload = item;
        this.fileData.append(item.name, fileToUpload);
      }
      // save attachment
      this.http.post(`${this.apiUrl}/Common/Documents`, this.fileData).subscribe(
        (result: any) => {
          this.tosterService.customToast('Picture Changed Successfully', 'success');
        },
        (err) => {
          console.log(err);
        });
    }
    this.getProfilePic();

  }

  uploadNID() {

    this.idFileData.append("entityId", this.doctorId.toString());
    this.idFileData.append("entityType", "Doctor");
    this.idFileData.append("attachmentType", "DoctIdentityDoc");
    this.idFileData.append("directoryName", "IdentityDoc\\" + this.doctorId.toString());
    if (this.idFileList.length > 0) {
      for (let item of this.idFileList) {
        let fileToUpload = item;
        this.idFileData.append(item.name, fileToUpload);
      }
      // save attachment
      this.http.post(`${this.apiUrl}/Common/Documents`, this.idFileData).subscribe(
        (result: any) => {
          this.tosterService.customToast('NID/Passport Changed Successfully', 'success');
        },
        (err) => {
          console.log(err);
        });
    }
    this.getNID();

  }

  uploadSpDoc() {
    this.spFileData.append("entityId", this.doctorId.toString());
    this.spFileData.append("entityType", "Doctor");
    this.spFileData.append("attachmentType", "DoctorSpecialityDoc");
    
    this.spFileData.append("directoryName", "DoctorSpecialityDoc\\" + this.doctorId.toString());
    if (this.spFileList.length > 0) {
      for (let item of this.spFileList) {
        let fileToUpload = item;
        this.spFileData.append("relatedEntityid", "DoctorSpecialityDoc");
        this.spFileData.append(item.name, fileToUpload);
      }
      // save attachment
      this.http.post(`${this.apiUrl}/Common/Documents`, this.spFileData).subscribe(
        (result: any) => {
          this.tosterService.customToast('Documents for Specializations Uploaded Successfully', 'success');
        },
        (err) => {
          console.log(err);
        });
    }
  }

  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.fileNames.push(selectedFile.name)
    }
    if (this.fileList.length > 0) {
      this.checkFileValidation(event);
    }
    this.attachment.nativeElement.value = '';
  }

  onIdFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.idFileList.push(selectedFile);
      this.idFileNames.push(selectedFile.name)
    }
    if (this.idFileList.length > 0) {
      this.checkIdFileValidation(event);
    }
    this.idAttachment.nativeElement.value = '';
  }

  onSpFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.spFileList.push(selectedFile);
      this.spFileNames.push(selectedFile.name)
    }
    if (this.spFileList.length > 0) {
      this.checkSpFileValidation(event);
    }
    this.spAttachment.nativeElement.value = '';
  }

  removeSelectedFile(index: any) {
    // delete file name from fileNames list
    this.fileNames.splice(index, 1);
    // delete file from FileList
    this.fileList.splice(index, 1);
  }

  removeIdSelectedFile(index: any) {
    // delete file name from fileNames list
    this.idFileNames.splice(index, 1);
    // delete file from FileList
    this.idFileList.splice(index, 1);
  }

  removeSpSelectedFile(index: any) {
    // delete file name from fileNames list
    this.spFileNames.splice(index, 1);
    // delete file from FileList
    this.spFileList.splice(index, 1);
  }

  checkFileValidation(event: any) {
    let count = event.target.files.length;
    if (count > 0) {
      var allowedFiles = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      const files: File[] = event.target.files;
      this.fileList = Array.from(files);
      for (let i = 0; i < count; i++) {
        if (files[i].size > 5242880) {
          this.fileNames.splice(i, 1);
          this.fileList.splice(i, 1);

          this.tosterService.customToast('Maximum 5MB Accepted', 'warning');
          //this.toastr.warning('Maximum 5MB Accepted.', 'Warning');
        }
        if (!(allowedFiles.indexOf(files[i].type.toLowerCase()) >= 0)) {
          this.fileNames.splice(i, 1);
          this.fileList.splice(i, 1);
          this.tosterService.customToast("Only jpeg & jpg are Accepted.", 'warning');

        }
      }

    }
  }

  checkIdFileValidation(event: any) {
    let count = event.target.files.length;
    if (count > 0) {
      var allowedFiles = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      const files: File[] = event.target.files;
      this.idFileList = Array.from(files);
      for (let i = 0; i < count; i++) {
        if (files[i].size > 5242880) {
          this.idFileNames.splice(i, 1);
          this.idFileList.splice(i, 1);

          this.tosterService.customToast('Maximum 5MB Accepted', 'warning');
          //this.toastr.warning('Maximum 5MB Accepted.', 'Warning');
        }
        if (!(allowedFiles.indexOf(files[i].type.toLowerCase()) >= 0)) {
          this.idFileNames.splice(i, 1);
          this.idFileList.splice(i, 1);
          this.tosterService.customToast("Only jpeg & jpg are Accepted.", 'warning');

        }
      }

    }
  }

  checkSpFileValidation(event: any) {
    let count = event.target.files.length;
    if (count > 0) {
      var allowedFiles = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      const files: File[] = event.target.files;
      this.spFileList = Array.from(files);
      for (let i = 0; i < count; i++) {
        if (files[i].size > 5242880) {
          this.spFileNames.splice(i, 1);
          this.spFileList.splice(i, 1);

          this.tosterService.customToast('Maximum 5MB Accepted', 'warning');
          //this.toastr.warning('Maximum 5MB Accepted.', 'Warning');
        }
        if (!(allowedFiles.indexOf(files[i].type.toLowerCase()) >= 0)) {
          this.spFileNames.splice(i, 1);
          this.spFileList.splice(i, 1);
          this.tosterService.customToast("Only jpeg & jpg are Accepted.", 'warning');

        }
      }

    }
  }

  getProfilePic() {
    this.subs.sink = this.doctorProfilePicService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType("Doctor", this.doctorId, "ProfilePicture").subscribe((at: any) => {
      if (at) {
        let prePaths: string = "";
        var re = /wwwroot/gi;
        prePaths = at.path ? at.path : "";
        this.profilePic = prePaths.replace(re, "");
        this.profPicUrl = this.picUrl + this.profilePic;
      }
    });
  }

  getNID() {
    this.subs.sink = this.doctorProfilePicService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType("Doctor", this.doctorId, "DoctIdentityDoc").subscribe((at: any) => {
      if (at) {
        let prePaths: string = "";
        var re = /wwwroot/gi;
        prePaths = at.path ? at.path : "";
        this.profileNid = prePaths.replace(re, "");
        this.profNidUrl = this.picUrl + this.profileNid;
      }
    });
  }

  finalContinue() {
    this.subs.sink = this.doctorProfileService.get(this.doctorId).subscribe((doctorDto: DoctorProfileInputDto) => {
      if (doctorDto) {
        this.forStepUpdateDto.id = doctorDto.id;

        this.forStepUpdateDto.userId = doctorDto.userId;
        this.forStepUpdateDto.fullName = doctorDto.fullName;
        this.forStepUpdateDto.email = doctorDto.email;
        this.forStepUpdateDto.mobileNo = doctorDto.mobileNo;
        this.forStepUpdateDto.gender = doctorDto.gender;
        this.forStepUpdateDto.dateOfBirth = doctorDto.dateOfBirth;
        this.forStepUpdateDto.address = doctorDto.address;
        this.forStepUpdateDto.city = doctorDto.city;
        this.forStepUpdateDto.zipCode = doctorDto.zipCode;
        this.forStepUpdateDto.country = doctorDto.country;
        this.forStepUpdateDto.bmdcRegNo = doctorDto.bmdcRegNo;
        this.forStepUpdateDto.bmdcRegExpiryDate = doctorDto.bmdcRegExpiryDate;
        this.forStepUpdateDto.specialityId = doctorDto.specialityId;
        this.forStepUpdateDto.identityNumber = doctorDto.identityNumber;
        this.forStepUpdateDto.isActive = doctorDto.isActive;
        this.forStepUpdateDto.profileStep = 3;
        this.forStepUpdateDto.createFrom = doctorDto.createFrom;
        this.forStepUpdateDto.degrees = doctorDto.degrees;// .push(this.doctorDegrees);
        this.forStepUpdateDto.doctorSpecialization = doctorDto.doctorSpecialization;
        

        this.subs.sink = this.doctorProfileService.update(this.forStepUpdateDto).subscribe((res: DoctorProfileDto) => {
          if (res) {
            this.completeDegreeSpecilizationInfoModal = false;
            this.completeDocumentUpload = true
            let saveLocalStorage = {
              identityNumber: res.identityNumber,
              doctorName: res.fullName,
              bmdcRegNo: res.bmdcRegNo,
              isActive: res.isActive,
              userId: res.userId,
              id: res.id,
              specialityId: res.specialityId,
              profileStep: res.profileStep,
              createFrom: res.createFrom
            }
            this.normalAuth.setAuthInfoInLocalStorage(saveLocalStorage)
            if (this.normalAuth) {
              this.loadAuth();
            }
            this.toasterService.success("Degree and Specializtion info updated Successfully"),
              { position: 'bottom-center' }
            this.cdRef.detectChanges();
          }
        });
      }
    });
  }
}





