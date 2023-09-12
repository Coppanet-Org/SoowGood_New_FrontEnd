import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { TosterService } from 'src/app/shared/services/toster.service';

import { LoaderService } from './../../services/loader.service';
import { PatientProfileService } from 'src/app/proxy/services';

import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  bookingFilterInputData,
  inputForCreatePatient,
} from '../../utils/input-info';

import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { map, of, switchMap } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss'],
})
export class BookingDialogComponent implements OnInit {
  bookingForm!: FormGroup;
  form!: FormGroup;
  createPatientForm!: FormGroup;
  inputConfigs: any;
  inputForCreatePatient: any;
  secondFormGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  activeTab!: any;
  isBookMyselfClick: boolean = false;

  @ViewChild('buttonMyself') buttonMyself!: ElementRef;
  @ViewChild('buttonOthers') buttonOthers!: ElementRef;
  isBookOther: boolean = false;
  isNewUser: boolean = false;
  isExistUser: boolean = true;
  profileInfo: any;
  btnLoader: boolean = false;
  userPatientInfo: any;
  userPatientList: any = [];
  value: any;
  ConsultancyType:any
  doctorId: any;





  constructor(
    private fb: FormBuilder,
    private UserinfoStateService: UserinfoStateService,
    private PatientProfileService: PatientProfileService,
    private LoaderService: LoaderService,
    private TosterService: TosterService,
    private DoctorScheduleService: DoctorScheduleService,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined
  ) {
    this.bookingForm = this.fb.group({
      bookMyself: [false],
      bookOther: [false],
      patientName: [''],
      age: [''],
      mobile: [''],
    });

    this.inputForCreatePatient = inputForCreatePatient;
  }

  ngOnInit() {
   
console.log(this.doctorData);




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
  onStepChange(e: any) {
    this.activeTab = e;
  }

  userExistCheck(status: string): void {
    this.createPatientForm.get([
      'patientName',
      'age',
      'gender',
      'bloodGroup',
      'patientMobileNo',
    ])?.reset();

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

  loadForm() {
    this.form = this.fb.group({
      scheduleType: ['', Validators.required],
      doctorChamberId: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
    this.createPatientForm = this.fb.group({
      isSelf: [false, Validators.required],
      patientName: ['', Validators.required],
      age: [, Validators.required],
      gender: [, Validators.required],
      bloodGroup: ['', Validators.required],
      patientMobileNo: ['', Validators.required],
      patientEmail: ['' || this.profileInfo?.email, Validators.required],
      createdBy: [this.profileInfo.fullName, Validators.required],
      creatorEntityId: [this.profileInfo.id, Validators.required],
    });
  }

  createNewPatient(): void {
    console.log(this.createPatientForm.value);
    if (!this.createPatientForm.valid) {
      this.TosterService.customToast(
        'Please field all the required fields',
        'warning'
      );
      return;
    }

    try {
      this.btnLoader = true;
      this.PatientProfileService.create(this.createPatientForm.value).subscribe(
        (res) => {
          this.btnLoader = false;
          this.TosterService.customToast('Your patient is created!', 'success');
          this.UserinfoStateService.getUserPatientInfo(
            this.profileInfo.id,
            'patient'
          );
          this.onStepChange(3);
        }
      );
    } catch (error) {
      this.TosterService.customToast('Something wrong! Please retry', 'error');
    }
  }

  getSinglePatientData(e: any) {
    if (e.target.value) {
      this.UserinfoStateService.getUserPatientData().subscribe((res) =>
        res.find((data: any) => {
          if (data.id == e.target.value) {
            this.createPatientForm.patchValue(data);
          }
          return;
        })
      );
    }
  }

  closeDialogs() {}
}
