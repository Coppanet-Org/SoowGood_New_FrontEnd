import { DoctorBookingStateService } from './../../services/states/doctor-booking-state.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppointmentService } from './../../../proxy/services/appointment.service';
import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { TosterService } from 'src/app/shared/services/toster.service';

import { LoaderService } from './../../services/loader.service';
import { PatientProfileService } from 'src/app/proxy/services';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
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
import { DoctorScheduleStateService } from '../../services/states/doctor-schedule-state.service';
import { InputComponent } from '../../modules/input/input.component';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss'],
})
export class BookingDialogComponent implements OnInit, AfterViewInit {
  bookingForm!: FormGroup;
  form!: FormGroup;
  createPatientForm!: FormGroup;
  inputConfigs: any;
  inputForCreatePatient: any;
  secondFormGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
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
  totalFee: any;
  filterDoctorId: any;
  showAppointmentTypeSelectBox: boolean = true;
  stepHeading: string = '';
  selectedSlotInfo: any;
  selectedFeesInfo: any;
  @ViewChildren(InputComponent) customInputs!: QueryList<InputComponent>;
  dataLoader!: boolean;

  hasValidCode = false;
  constructor(
    private fb: FormBuilder,
    private UserinfoStateService: UserinfoStateService,
    private PatientProfileService: PatientProfileService,
    private LoaderService: LoaderService,
    private TosterService: TosterService,
    private DoctorScheduleService: DoctorScheduleService,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    private DoctorScheduleStateService: DoctorScheduleStateService,
    private AppointmentService: AppointmentService,
    private AuthService: AuthService,
    private DoctorBookingStateService: DoctorBookingStateService,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined
  ) {
    this.inputForCreatePatient = inputForCreatePatient;
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }
  ngAfterViewInit() {
    // const filterCriteria = ['appointmentDate', 'doctorScheduleType', 'appointmentType'];

    // this.customInputs.forEach((customInput: InputComponent) => {
    //   if (filterCriteria.includes(customInput.inputId)) {
    //     // Check if the input value is empty and set an error message and the error state
    //     const formControl = this.form.get(customInput.formControlName);
    //     if (formControl && formControl.value === '') {

    //     }
    //   }
    // });
  }


  ngOnInit() {

    this.dataLoader = true
    this.DoctorScheduleStateService.getSelectedSlot()
      .pipe()
      .subscribe((slot: any) => {
        this.selectedSlotInfo = slot;
      });

    let schedule = this.doctorData.doctorScheduleInfo;
    if (schedule) {
      let list = this.doctorData.doctorScheduleInfo.map((e: any) => {
        return { name: e.scheduleName, id: e.scheduleName };
      });
      this.inputConfigs = bookingFilterInputData(list);
      this.dataLoader = false
    } else {
      this.inputConfigs = bookingFilterInputData([]);
      this.dataLoader = false
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
      .pipe(combineLatestWith([selectedItem2$, selectedItem3$, selectedItem4$]))
      .subscribe((data: any) => {
        let finalFilter: any = [];
        let isMatchFound = false;
        const day = dayFromDate(String(data[0]));
        if (data[0] && data[1]) {
          this.showAppointmentTypeSelectBox = false;
          selectedItemCount = 3;
          const scheduleMap = new Map();
          schedule.forEach((item: any) => {
            this.filterDoctorId = item.doctorProfileId;
            const key = `${item.scheduleName}`;
            if (!scheduleMap.has(key)) {
              scheduleMap.set(key, []);
            }
            scheduleMap.get(key).push(item);
          });
          const keyToSearch = `${data[1]}`;
          if (scheduleMap.has(keyToSearch)) {
            const items = scheduleMap.get(keyToSearch);
            items.forEach((item: any) => {
              const availableSessions = this.isDayAvailable(
                item.doctorScheduleDaySession,
                day
              );
              if (availableSessions.length > 0) {
                finalFilter = availableSessions.map((session: any) => {
                  let left = this.getLeftSlotForBooking(item)[session.id];
                  return {
                    ...session,
                    leftPatient: left,
                  };
                });
                isMatchFound = true;
                return;
              }
            });
          }
        }
        this.showAppointmentTypeSelectBox = true;
        if (!isMatchFound && selectedItemCount == 3) {
          this.TosterService.customToast('No schedule found!', 'warning');
        }
        this.filterData = finalFilter;
        this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
          finalFilter
        );
      });

    selectedItem2$
      .pipe(combineLatestWith(selectedItem4$))
      .subscribe((data: any) => {
        const feeEntry = schedule.filter((entry: any) => {
          return entry.scheduleName === data[0];
        });
        if (feeEntry) {
          feeEntry.map((fee: any) => {
            let fees = fee.doctorFeesSetup.find((f: any) =>
              f.appointmentType == data[1] ? f.totalFee : ''
            );
            this.totalFee = fees?.totalFee;
            this.selectedFeesInfo = fees;
          });
        } else {
          console.log(
            'Fee not found for the given schedule and appointment type.'
          );
        }
      });
  }

  getLeftSlotForBooking(item: any): any {
    // Create a dictionary to store the booked appointments count per session
    const bookedAppointments: any = {};
    // Loop through the appointment objects to count booked appointments per session
    item?.appointments.forEach((appointment: any) => {
      const sessionId = appointment.doctorScheduleDaySessionId;
      if (bookedAppointments[sessionId] === undefined) {
        bookedAppointments[sessionId] = 1;
      } else {
        bookedAppointments[sessionId]++;
      }
    });

    // Calculate the left number of patients for each session
    const leftNoOfPatients: any = {};

    item?.doctorScheduleDaySession.forEach((session: any) => {
      const sessionId = session.id;
      const bookedCount = bookedAppointments[sessionId] || 0;
      leftNoOfPatients[sessionId] = session.noOfPatients - bookedCount;
    });
    return leftNoOfPatients;
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
      consultancyType: [''],
      doctorScheduleType: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentType: ['', Validators.required],
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
    if (e === 1) {
      this.activeTab = e;
    }
    if (e == 2) {
      this.activeTab = e;
    }
    if (e === 3) {

      if (this.form.valid) {

        this.stepHeading = 'Confirm';
        let schedule = this.doctorData.doctorScheduleInfo;
        const { doctorScheduleId, id, scheduleDayofWeek } = this.selectedSlotInfo;
        let finalSchedule = schedule.find(
          (res: any) => res.id === doctorScheduleId
        );
        const {
          consultancyType,
          doctorChamberId,
          doctorProfileId,
          scheduleType,
        } = finalSchedule;

        const { appointmentType, appointmentDate } = this.form.value;
        let user: any = '';
        this.UserinfoStateService.getData().subscribe(
          (userInfo) => (user = userInfo)
        );



        const infoForBooking = {
          doctorScheduleId,
          doctorProfileId,
          doctorName: this.doctorData?.doctorDetails.fullName,
          doctorCode: this.doctorData?.doctorDetails.doctorCode,
          patientProfileId: user?.id,
          patientName: user?.fullName,
          patientCode: user?.patientCode,
          consultancyType,
          doctorChamberId,
          scheduleType,
          doctorScheduleDaySessionId: id,
          scheduleDayofWeek,
          appointmentType,
          appointmentDate,
          appointmentTime: '',
          doctorFeesSetupId: this.selectedFeesInfo.id,
          doctorFee: this.selectedFeesInfo.totalFee,
          agentFee: 0,
          platformFee: 0,
          totalAppointmentFee: this.selectedFeesInfo.totalFee,
          appointmentStatus: 1,
          appointmentPaymentStatus: 2,
        };
        //  && this.form.valid
        if (infoForBooking) {
          //this.DoctorBookingStateService.sendBookingData(infoForBooking);
          this.AppointmentService.create(infoForBooking).subscribe((res) => {
            this.DoctorBookingStateService.sendBookingData({ ...infoForBooking, appointmenCode: res.appointmenCode });
            console.log(res);
            this.activeTab = e;
          });
        }
      } else {
        this.TosterService.customToast(
          'Please select all the required fields',
          'warning'
        );
        return;
      }
      return;
    }
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
  closeDialogs() { }
}
