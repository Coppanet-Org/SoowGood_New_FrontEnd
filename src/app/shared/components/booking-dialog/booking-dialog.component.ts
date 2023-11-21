import { AuthService } from 'src/app/shared/services/auth.service';
import { AppointmentService } from './../../../proxy/services/appointment.service';
import { DoctorScheduleService } from './../../../proxy/services/doctor-schedule.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { LoaderService } from './../../services/loader.service';
import { PatientProfileService } from 'src/app/proxy/services';

import {
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
  dayFromDate,
  inputForCreatePatient,
} from '../../utils/input-info';

import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import {
 
  combineLatestWith,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputComponent } from '../../modules/input/input.component';
import { PatientProfileDto } from 'src/app/proxy/dto-models';
import { DoctorScheduleStateService } from '../../services/states/doctors-states/doctor-schedule-state.service';
import { DoctorBookingStateService } from '../../services/states/doctors-states/doctor-booking-state.service';
import { SubSink } from 'SubSink';
import { CommonService } from '../../services/common.service';
import { AppointmentType, Gender } from 'src/app/proxy/enums';
import { customNameValidator } from '../../utils/auth-helper';

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
  createNewPatientInfo: PatientProfileDto = {};
  alreadyExistPatient: PatientProfileDto = {};

  subs = new SubSink();
  hospitalList: any;
  appointmentType:any;
  formSubmitted: boolean = false;
  showEmptySlot: string="";
  genderList:any;
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
  // ngAfterViewInit() {
    // const filterCriteria = ['appointmentDate', 'doctorScheduleType', 'appointmentType'];
    // this.customInputs.forEach((customInput: InputComponent) => {
    //   if (filterCriteria.includes(customInput.inputId)) {
    //     // Check if the input value is empty and set an error message and the error state
    //     const formControl = this.form.get(customInput.formControlName);
    //     if (formControl && formControl.value === '') {
    //     }
    //   }
    // });
  // }

  ngOnInit() {

    this.selectedSlotInfo = ''
    this.dataLoader = true;
    this.appointmentType = CommonService.getEnumList(AppointmentType);
    this.genderList = CommonService.getEnumList(Gender);
    this.DoctorScheduleStateService.getSelectedSlot()
      .pipe()
      .subscribe((slot: any) => {
        this.selectedSlotInfo = slot;
      });

    let schedule = this.doctorData.doctorScheduleInfo;
    if (schedule) {
      this.hospitalList = this.doctorData.doctorScheduleInfo.map((e: any) => {
        return { name: e.scheduleName, id: e.scheduleName };
      });
      // this.inputConfigs = bookingFilterInputData(list);
      this.dataLoader = false;
    } else {
      // this.inputConfigs = bookingFilterInputData([]);
      this.dataLoader = false;
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
     

      //  filtering start
    const selectedItem1$: any = this.form
      .get('appointmentDate')
      ?.valueChanges.pipe(startWith(this.form.get('appointmentDate')?.value));

    const selectedItem2$: any = this.form
      .get('doctorScheduleType')
      ?.valueChanges.pipe(startWith(this.form.get('doctorScheduleType')));

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

        if (data[3] == 0) {
          this.showAppointmentTypeSelectBox = true;
          this.filterData = finalFilter;
          this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
            finalFilter
          );
          return;
        }
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
                  let left = this.getLeftSlotForBooking(item, data[0])[
                    session.id
                  ];
                  return {
                    ...session,
                    leftPatient: left,
                  };
                });
                isMatchFound = true;
                return;
              }else{
                this.showEmptySlot = "No slot is available! Please change appointment date or hospital/chamber."
              }
            });
          }
        }
        this.showAppointmentTypeSelectBox = true;
        this.filterData = finalFilter;
        this.selectedSlotInfo ={}
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

  getLeftSlotForBooking(item: any, selectedDate: string) {
    // Create a dictionary to store the booked appointments count per session and date
    const bookedAppointments: any = {};

    // Loop through the appointment objects to count booked appointments per session and date
    item.appointments.forEach((appointment: any) => {
      const sessionId = appointment.doctorScheduleDaySessionId;
      const appointmentDate = appointment.appointmentDate.split('T')[0]; // Extract the date portion

      if (!bookedAppointments[sessionId]) {
        bookedAppointments[sessionId] = {};
      }

      if (!bookedAppointments[sessionId][appointmentDate]) {
        bookedAppointments[sessionId][appointmentDate] = 1;
      } else {
        bookedAppointments[sessionId][appointmentDate]++;
      }
    });

    // Calculate the left number of patients for each session and date
    const leftNoOfPatients: any = {};

    item.doctorScheduleDaySession.forEach((session: any) => {
      const sessionId = session.id;
      const sessionDate = selectedDate.split('T')[0]; // Extract the date portion
      const bookedCount =
        (bookedAppointments[sessionId] &&
          bookedAppointments[sessionId][sessionDate]) ||
        0;

      leftNoOfPatients[sessionId] = session.noOfPatients - bookedCount;
    });

    // Return the available slots for the selected date
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
      bookMyself: [''],
      bookOther: [''],
      patientName: [''],
      age: [''],
      mobile: [''],
    });
    this.form = this.fb.group({
      consultancyType: [''],
      doctorScheduleType: ['0', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentType: ['0', Validators.required],
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

  // change step
  onStepChange(e: number) {
    
    if (e >= 0 && e < 3) {
      this.activeTab = e;
    }


    if (e === 3 && this.form.valid) {
      this.formSubmitted = true
      if (this.filterData.length <= 0 && !this.selectedSlotInfo?.doctorScheduleId ) {
        this.TosterService.customToast(
          'No slot found your selected options!',
          'warning'
        );
        return
      }



      const { doctorScheduleId, id, scheduleDayofWeek } = this.selectedSlotInfo;
      const finalSchedule = this.doctorData.doctorScheduleInfo.find(
        (res: any) => res.id === doctorScheduleId
      );

      if (finalSchedule && finalSchedule.consultancyType) {
        this.formSubmitted = true
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
          patientProfileId: this.alreadyExistPatient?.id
            ? this.alreadyExistPatient?.id
            : this.createNewPatientInfo.id
            ? this.createNewPatientInfo?.id
            : user?.id,
          patientName: this.alreadyExistPatient?.patientName
            ? this.alreadyExistPatient?.patientName
            : this.createNewPatientInfo?.patientName
            ? this.createNewPatientInfo?.patientName
            : user?.fullName,
          patientCode: this.alreadyExistPatient?.patientCode
            ? this.alreadyExistPatient?.patientCode
            : this.createNewPatientInfo?.patientCode
            ? this.createNewPatientInfo?.patientCode
            : user?.patientCode,
          patientMobileNo: this.alreadyExistPatient?.patientMobileNo
            ? this.alreadyExistPatient?.patientMobileNo
            : this.createNewPatientInfo?.patientMobileNo
            ? this.createNewPatientInfo?.patientMobileNo
            : user?.mobileNo,
          patientEmail: this.alreadyExistPatient?.patientEmail
            ? this.alreadyExistPatient?.patientEmail
            : this.createNewPatientInfo?.patientEmail
            ? this.createNewPatientInfo?.patientEmail
            : user.email || 'admin@gmail.com',
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
          appointmentCreatorId: user?.id,
        };
  
        if (infoForBooking && user) {
          this.formSubmitted = true
          if (this.bookingForm.get('bookMyself')?.value == 'bookMyself') {
            const obj = {
              id: user?.id,
              patientName: user.fullName,
              patientCode: user.patientCode,
              patientEmail: user.email ? user.email : 'admin@gmail.com',
              patientMobileNo: user.mobileNo,
            };
  
            this.PatientProfileService.update(obj).subscribe((res) => {
              this.createAppointment(infoForBooking, e);
            });
          }
  
          if (this.bookingForm.get('bookOther')?.value == 'bookOther') {
            this.createAppointment(infoForBooking, e);
          }
          return;
        }
        // this.stepHeading = 'Confirm';
      } else {
        this.formSubmitted = true
        this.TosterService.customToast(
          'Please select a slot',
          'warning'
        );
      }

   
    } else if (e === 3 && !this.form.valid) {
      this.formSubmitted = true
      this.TosterService.customToast(
        'Please select all the required fields',
        'warning'
      );
    } else {
      return;
    }
  }

  createAppointment(infoForBooking: any, e: any) {
    this.AppointmentService.create(infoForBooking).subscribe((res) => {
      this.DoctorBookingStateService.sendBookingData({
        ...infoForBooking,
        appointmentCode: res.appointmentCode,
      });
      localStorage.setItem(
        'patientAppointmentCode',
        JSON.stringify(res.appointmentCode)
      );
      this.activeTab = e;
    });
  }

  //user existing check
  userExistCheck(status: string): void {
    this.createPatientForm.get('patientName')?.reset();
this.createPatientForm.get('age')?.reset();
this.createPatientForm.get('gender')?.reset();
this.createPatientForm.get('bloodGroup')?.reset();
this.createPatientForm.get('patientMobileNo')?.reset();


    console.log( this.createPatientForm.value);
    
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
            });
          }
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
            this.alreadyExistPatient = data;
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
  closeDialogs() {
    this.selectedSlotInfo = ''
    this.dialogRef.close(false)
  }
}
