import { PatientProfileService } from './../../../../../proxy/services/patient-profile.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, of, switchMap } from 'rxjs';
import { PatientProfileDto } from 'src/app/proxy/dto-models';
import { Gender } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { customNameValidator } from 'src/app/shared/utils/auth-helper';

@Component({
  selector: 'app-live-consult-booking-dialog',
  templateUrl: './live-consult-booking-dialog.component.html',
  styleUrls: ['./live-consult-booking-dialog.component.scss'],
})
export class LiveConsultBookingDialogComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  bookingForm!: FormGroup;
  createPatientForm!:FormGroup;
  thirdFormGroup!:FormGroup;
  fourFormGroup!:FormGroup;
  bookingInfo:any
  activeTab:number=0
  formSubmitted: boolean= false;
  createNewPatientInfo: PatientProfileDto = {};
  alreadyExistPatient: PatientProfileDto = {};
  isNewUser: boolean = false;
  isExistUser: boolean = true;
  btnLoader: boolean = false;
  profileInfo: any;
  userPatientList: any[]=[];
  genderList: ListItem[]=[];
  stepLoading: boolean= false;
  constructor(
    public dialogRef: MatDialogRef<LiveConsultBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined,
    private fb: FormBuilder,
    private UserinfoStateService : UserinfoStateService,
    private TosterService : TosterService,
    private PatientProfileService : PatientProfileService,
    private NormalAuth : AuthService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.genderList = CommonService.getEnumList(Gender)

    let id = this.NormalAuth.authInfo()?.id;
    if (id) {
      this.UserinfoStateService.getUserPatientInfo(id, 'patient');
      this.UserinfoStateService.getProfileInfo(id, 'patient');
    }

    this.UserinfoStateService.getData()
    .pipe(
      switchMap((e) => {
        this.profileInfo = e;
        this.loadForm();
        if (e) {
          return this.UserinfoStateService.getUserPatientData().pipe(
            map((data) => {
              return data.map((item: any) => ({
                name: item.patientName,
                id: item.id,
              }));
            })
          );
        } else {
          return of([]);
        }
      })
    )
    .subscribe((res) => {
      this.userPatientList = res;
    });
  }
  loadForm() {
    //future update
    this.bookingForm = this.fb.group({
      bookMyself: [''],
      bookOther: [''],
      patientName: [''],
      age: [''],
      mobile: [''],
    });
    this.createPatientForm = this.fb.group({
      isSelf: [false, Validators.required],
      patientName: ['', [Validators.required, Validators.minLength(3), customNameValidator]],
      patientProfileId: [''],
      age: ['', [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]{0,2}$/),
      ]],
      gender: ['0', Validators.required],
      bloodGroup: ['0', Validators.required],
      patientMobileNo: ['', [
        Validators.required,
        Validators.pattern(/^(?:88)?[0-9]{11}$/),
        Validators.minLength(11),
        Validators.maxLength(11),
      ],],
      patientEmail: [
        '' || this.profileInfo?.email || 'admin@gmail.com',
        Validators.required,
      ],
      createdBy: [this.profileInfo.fullName, Validators.required],
      creatorEntityId: [this.profileInfo.id, Validators.required],
    });
  }
  onStepChange(step: number,bookFor?:string) {

    
    if (step===0) {
      this.activeTab = step;
    }
    if (step === 2) {
      this.stepLoading = true
      this.formSubmitted = true
        const infoForBooking = {
          doctorProfileId:this.doctorData.doctorDetails.id,
          doctorName: this.doctorData?.doctorDetails.fullName,
          doctorCode: this.doctorData?.doctorDetails.doctorCode,
          patientProfileId: this.alreadyExistPatient?.id
            ? this.alreadyExistPatient?.id
            : this.createNewPatientInfo.id
            ? this.createNewPatientInfo?.id
            : this.profileInfo?.id,
          patientName: this.alreadyExistPatient?.patientName
            ? this.alreadyExistPatient?.patientName
            : this.createNewPatientInfo?.patientName
            ? this.createNewPatientInfo?.patientName
            : this.profileInfo?.fullName,
          patientCode: this.alreadyExistPatient?.patientCode
            ? this.alreadyExistPatient?.patientCode
            : this.createNewPatientInfo?.patientCode
            ? this.createNewPatientInfo?.patientCode
            : this.profileInfo?.patientCode,
          patientMobileNo: this.alreadyExistPatient?.patientMobileNo
            ? this.alreadyExistPatient?.patientMobileNo
            : this.createNewPatientInfo?.patientMobileNo
            ? this.createNewPatientInfo?.patientMobileNo
            : this.profileInfo?.mobileNo,
          patientEmail: this.alreadyExistPatient?.patientEmail
            ? this.alreadyExistPatient?.patientEmail
            : this.createNewPatientInfo?.patientEmail
            ? this.createNewPatientInfo?.patientEmail
            : this.profileInfo.email || 'admin@gmail.com',
          // appointmentDate:"2023-12-12T14:35:35.546Z",
          // appointmentTime: "10",
          doctorFee: 100,
          agentFee: 0,
          platformFee: 0,
          totalAppointmentFee: 100,
          appointmentStatus: 1,
          appointmentPaymentStatus: 2,
          appointmentCreatorId: this.profileInfo?.id,
        };
        this.bookingInfo = infoForBooking

        if (this.profileInfo && bookFor === 'self' ) {
          this.formSubmitted = true
            const obj = {
              id: this.profileInfo?.id,
              patientName: this.profileInfo.fullName,
              patientCode: this.profileInfo.patientCode,
              patientEmail: this.profileInfo.email ? this.profileInfo.email : 'admin@gmail.com',
              patientMobileNo: this.profileInfo.mobileNo,
            };
  
              this.PatientProfileService.update(obj).subscribe((res) => {
              this.stepLoading = false
              this.activeTab = step;

            });
          
        }else{
          this.activeTab = step; 
        }
        
      }
      if (step === 1) {
        this.activeTab = step; 
      }
   
    } 
  

  getSinglePatientData(e: any) {
      if (e.target.value) {
        this.UserinfoStateService.getUserPatientData().subscribe((res) =>
          res.find((data: any) => {
            if (data.id == e.target.value) {
              this.alreadyExistPatient= data;
              this.createPatientForm.patchValue({
                patientProfileId: data.id,
                age: data.age,
                gender: data.gender,
                bloodGroup: data.bloodGroup,
                patientMobileNo: data.patientMobileNo,
                patientEmail: data.patientEmail,
                patientName: data.patientName,
                createdBy: data.createdBy,
                creatorEntityId: data.creatorEntityId,
              });
  
              //  this.createPatientForm.patchValue(data);
            }
            return;
          })
        );
      }
  }
      //user existing check
  userExistCheck(status: string): void {
    this.createPatientForm.get('patientName')?.reset();
    this.createPatientForm.get('age')?.reset();
    this.createPatientForm.get('gender')?.reset();
    this.createPatientForm.get('bloodGroup')?.reset();
    this.createPatientForm.get('patientMobileNo')?.reset();

    switch (status) {
      case 'new-user':
        this.isNewUser = true;
        this.isExistUser = false;
        return;
      case 'exist-user':
        this.isNewUser = false;
        this.isExistUser = true;
        return;
      default:
        break;
    }
  }
  //create new patient under user
  createNewPatient(): void {
    this.formSubmitted = true

    if (!this.createPatientForm.valid) {
      this.TosterService.customToast(
        'Please field all the required fields',
        'warning'
      );
      return;
    }

    if (this.isNewUser) {
      try {
        this.btnLoader = true;
        this.PatientProfileService.create(
          this.createPatientForm.value
        ).subscribe((res) => {
          if (res.patientCode && res.patientMobileNo) {
            this.PatientProfileService.getByPhoneAndCode(
              res.patientCode,
              res.patientMobileNo
            ).subscribe((p) => {
              this.createNewPatientInfo = p;
              this.TosterService.customToast('Your patient is created!', 'success');
              this.UserinfoStateService.getUserPatientInfo(
               this.profileInfo.id,
                'patient'
               );
               
               this.onStepChange(2,'others');
               this.btnLoader = false;
            });
          }
          
        });
      } catch (error) {
        this.TosterService.customToast(
          'Something wrong! Please retry',
          'error'
        );
      }
    } else {
      this.onStepChange(2);
    }
  }

  }
  

