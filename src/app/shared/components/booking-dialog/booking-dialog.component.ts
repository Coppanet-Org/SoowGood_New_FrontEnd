import { SlotsService } from './../../services/states/slots.service';
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
  dayFromDate,
  inputForCreatePatient,
} from '../../utils/input-info';

import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import {
  combineLatest,
  combineLatestWith,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
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
  ConsultancyType: any;
  doctorId: any;
  filterData: any;

  constructor(
    private fb: FormBuilder,
    private UserinfoStateService: UserinfoStateService,
    private PatientProfileService: PatientProfileService,
    private LoaderService: LoaderService,
    private TosterService: TosterService,
    private DoctorScheduleService: DoctorScheduleService,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    private SlotsService: SlotsService,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined
  ) {
    this.inputForCreatePatient = inputForCreatePatient;
  }

  ngOnInit() {
    let schedule = this.doctorData.doctorScheduleInfo;
    if (schedule) {
      let list = this.doctorData.doctorScheduleInfo.map((e: any) => {
        return { name: e.scheduleName, id: e.scheduleName };
      });
      this.inputConfigs = bookingFilterInputData(list);
    } else {
      this.inputConfigs = bookingFilterInputData([]);
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

    const selectedItem1$: any = this.form
      .get('appointmentDate')
      ?.valueChanges.pipe(startWith(this.form.get('appointmentDate')?.value));

    const selectedItem2$: any = this.form
      .get('doctorScheduleType')
      ?.valueChanges.pipe(
        startWith(this.form.get('doctorScheduleType')?.value)
      );

    const selectedItem3$: any = this.form
      .get('consultancyType')
      ?.valueChanges.pipe(startWith(this.form.get('consultancyType')?.value));

    const selectedItem4$: any = this.form
      .get('appointmentType')
      ?.valueChanges.pipe(startWith(this.form.get('appointmentType')?.value));

      let selectedItemCount = 0;
    // Combine the changes by adding them together
    selectedItem1$
      .pipe(combineLatestWith([selectedItem2$, selectedItem3$,selectedItem4$]))
      .subscribe((data: any) => {
        let finalFilter: any = [];
        let isMatchFound = false;
        const day = dayFromDate(String(data[0]));
        if (data[0] && data[1] && data[2] ) {
          selectedItemCount = 3
          const scheduleMap = new Map();
          schedule.forEach((item: any) => {
            console.log(item);
            
            const key = `${item.scheduleName}_${item.consultancyType}`;
            if (!scheduleMap.has(key)) {
              scheduleMap.set(key, []);
            }
            scheduleMap.get(key).push(item);
          });

          const keyToSearch = `${data[1]}_${data[2]}`;
          if (scheduleMap.has(keyToSearch)) {
            const items = scheduleMap.get(keyToSearch);
            items.forEach((item: any) => {
              const availableSessions = this.isDayAvailable(
                item.doctorScheduleDaySession,
                day
              );
              if (availableSessions.length > 0) {
                finalFilter = availableSessions;
                isMatchFound = true;
                return;
              }
            });
          }
        }
        if (!isMatchFound && selectedItemCount == 3) {
          this.TosterService.customToast('No schedule found!', 'warning');
        }
        this.filterData = finalFilter;
        this.SlotsService.sendSlotData(finalFilter);
      });


      selectedItem2$.pipe(combineLatestWith(selectedItem4$))
      .subscribe((data:any) => {
        // Find the fee based on scheduleName and appointmentType
        console.log(data);
        
        const feeEntry = schedule.filter((entry:any) => {
          return (
            entry.scheduleName === data[0]
          );
        });
    
        if (feeEntry) {
          let finalFee = feeEntry.map((fee:any)=> {
              // if (fee.appointmentType = data[1]) {
              //  return fee.currentFee
              // }

              let fees = fee.doctorFeesSetup.find((f:any)=> f.appointmentType == data[1] ? f.currentFee : "" )
              console.log(fees);
              
              console.log(fees.currentFee);
              
            
          })
          // const currentFee = feeEntry.currentFee;
          console.log('Current Fee:', finalFee);
          // You can now use the currentFee value as needed.
        } else {
          console.log('Fee not found for the given schedule and appointment type.');
          // Handle the case where no fee is found.
        }
      });



  }
  isDayAvailable(doctorScheduleDaySession: any[], day: string): any {
    // console.log(doctorScheduleDaySession.some((session) => session.scheduleDayofWeek === day));
    return doctorScheduleDaySession.filter(
      (session) => session.scheduleDayofWeek === day
    );
  }
  loadForm() {
    //future update
    this.bookingForm = this.fb.group({
      bookMyself: [false],
      bookOther: [false],
      patientName: [''],
      age: [''],
      mobile: [''],
    });
    this.form = this.fb.group({
      consultancyType: ['', Validators.required],
      doctorScheduleType: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentType:['', Validators.required]
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

  // change step
  onStepChange(e: any) {
    this.activeTab = e;
  }
  //user existing check
  userExistCheck(status: string): void {
    this.createPatientForm
      .get(['patientName', 'age', 'gender', 'bloodGroup', 'patientMobileNo'])
      ?.reset();

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
          this.btnLoader = false;
          this.TosterService.customToast('Your patient is created!', 'success');
          this.UserinfoStateService.getUserPatientInfo(
            this.profileInfo.id,
            'patient'
          );
          this.onStepChange(1);
        });
      } catch (error) {
        this.TosterService.customToast(
          'Something wrong! Please retry',
          'error'
        );
      }
    } else {
      this.onStepChange(1);
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
