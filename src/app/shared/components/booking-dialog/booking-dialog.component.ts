import { Router } from '@angular/router';
import { AppointmentService } from './../../../proxy/services/appointment.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import {
  FinancialSetupService,
  PatientProfileService,
} from 'src/app/proxy/services';

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
import { dayFromDate, inputForCreatePatient } from '../../utils/input-info';

import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import {
  Observable,
  combineLatestWith,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputComponent } from '../../modules/input/input.component';
import { FinancialSetupDto, PatientProfileDto } from 'src/app/proxy/dto-models';
import { DoctorScheduleStateService } from '../../services/states/doctors-states/doctor-schedule-state.service';
import { SubSink } from 'subsink';
import { CommonService } from '../../services/common.service';
import { AppointmentType, Gender } from 'src/app/proxy/enums';
import { customNameValidator } from '../../utils/auth-helper';
import { AuthService } from '../../services/auth.service';
import { DateFilterFn } from '@angular/material/datepicker';

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
  serviceFeeList: FinancialSetupDto[] = [];
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
  disabledDays: number[] = [];
  subs = new SubSink();
  hospitalList: any;
  appointmentType: any;
  formSubmitted: boolean = false;
  showEmptySlot: string = '';
  genderList: any;
  bookingInfo: any;
  filteredChamber: any = [];
  sessionRole: any;
  isLoading: boolean = false;
  minDate: Date;
  maxDate: Date;
  constructor(
    private fb: FormBuilder,
    private UserinfoStateService: UserinfoStateService,
    private PatientProfileService: PatientProfileService,
    private FinancialSetupService: FinancialSetupService,
    private TosterService: TosterService,
    private DoctorScheduleStateService: DoctorScheduleStateService,
    private NormalAuth: AuthService,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined
  ) {
    this.inputForCreatePatient = inputForCreatePatient;
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDate);
    const twoWeeksLater = new Date(today);
    twoWeeksLater.setDate(today.getDate() + 30);
    this.maxDate = twoWeeksLater;
  }

  ngOnInit() {
    this.sessionRole = this.NormalAuth.authInfo()?.userType;
    this.selectedSlotInfo = '';
    this.dataLoader = true;
    this.appointmentType = CommonService.getEnumList(AppointmentType);
    this.genderList = CommonService.getEnumList(Gender);
    this.FinancialSetupService.getList().subscribe((res) => {
      this.serviceFeeList = res;
    });
    this.DoctorScheduleStateService.getSelectedSlot()
      .pipe()
      .subscribe((slot: any) => {
        this.selectedSlotInfo = slot;
      });
    let schedule = this.doctorData.doctorScheduleInfo;
    if (schedule) {
      // this.hospitalList = schedule.map((e: any) => {
      //   return { name: e.scheduleName, id: e.scheduleName };
      // });
      // this.inputConfigs = bookingFilterInputData(list);
      this.dataLoader = false;
    } else {
      // this.inputConfigs = bookingFilterInputData([]);
      this.dataLoader = false;
    }
    // let schedule = this.doctorData.doctorScheduleInfo;
    // if (schedule) {
    //   this.hospitalList = this.doctorData.doctorScheduleInfo.map((e: any) => {
    //     return { name: e.scheduleName, id: e.scheduleName };
    //   });
    //   // this.inputConfigs = bookingFilterInputData(list);
    //   this.dataLoader = false;
    // } else {
    //   // this.inputConfigs = bookingFilterInputData([]);
    //   this.dataLoader = false;
    // }
    let id = this.NormalAuth.authInfo()?.id;
    if (id) {
      if (this.sessionRole == 'patient') {
        this.UserinfoStateService.getUserPatientInfo(id, 'patient');
      }
      if (this.sessionRole == 'agent') {
        this.UserinfoStateService.getUserPatientInfo(id, 'agent');
      }
      this.UserinfoStateService.getData()
        .pipe(
          switchMap((e) => {
            this.profileInfo = e;
            this.loadForm();
            if (e) {
              return this.UserinfoStateService.getUserPatientData().pipe(
                map((data) => {
                  return data?.map((item: any) => ({
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

    //  filtering start
    const selectedItem1$: any = this.form
      .get('appointmentDate')
      ?.valueChanges.pipe(startWith(this.form.get('appointmentDate')?.value));

    const selectedItem2$: any = this.form
      .get('doctorScheduleType')
      ?.valueChanges.pipe(startWith(this.form.get('doctorScheduleType')));

    const selectedItem4$: any = this.form
      .get('appointmentType')
      ?.valueChanges.pipe(startWith(this.form.get('appointmentType')?.value));

    const enableDayList = schedule
      .map((item: any) =>
        item.doctorScheduleDaySession.map((days: any) => days.scheduleDayofWeek)
      )
      .flat();

    const dayToNumber = (days: any) => {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      return daysOfWeek.indexOf(days);
    };

    const days = [0, 1, 2, 3, 4, 5, 6];
    const uniqueDaysAsNumbers = [...new Set(enableDayList)].map(dayToNumber);
    this.disabledDays = days.filter(
      (day) => !uniqueDaysAsNumbers.includes(day)
    );

    let day = '';

    selectedItem1$
      .pipe(
        map((selectedItem1: any) => {
          day = dayFromDate(String(selectedItem1));

          const hospitals = schedule
            .filter((item: any) =>
              item.doctorScheduleDaySession.some(
                (session: any) => session.scheduleDayofWeek === day
              )
            )
            .map((item: any) => ({
              name: item.scheduleName,
              id: item.scheduleName,
            }));
          return hospitals;
        })
      )
      .subscribe((hospitals: any) => {
        this.hospitalList = hospitals;
      });

    selectedItem2$
      .pipe(
        map((selectedItem2: any) => {
          const sessions = schedule
            .find((item: any) => item.scheduleName === selectedItem2)
            ?.doctorScheduleDaySession.filter(
              (e: any) => e.scheduleDayofWeek === day
            );
          const updatedSchedule = schedule.find(
            (e: any) => e.scheduleName === selectedItem2
          );

          return { sessions, updatedSchedule };
        })
      )
      .subscribe(({ sessions, updatedSchedule }: any) => {
        console.log(updatedSchedule);

        let filterSession = sessions?.map((s: any) => {
          let apt = updatedSchedule?.appointments?.filter(
            (a: any) => a.doctorScheduleDaySessionId == s.id
          )?.length;
          return { ...s, leftSlot: s.noOfPatients - apt };
        });

        this.filterData = filterSession;
        this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
          filterSession
        );
      });

    selectedItem2$
      .pipe(combineLatestWith(selectedItem4$))
      .subscribe((data: any) => {
        if (data[1] == 0) {
          this.totalFee = 0;
          return;
        }
        const feeEntry = schedule.filter((entry: any) => {
          return entry.scheduleName === data[0];
        });
        if (feeEntry) {
          feeEntry.map((fee: any) => {
            console.log(fee);

            let fees = fee.doctorFeesSetup.find((f: any) =>
              f.appointmentType == data[1] ? f.totalFee : ''
            );
            if (!fees) {
              this.TosterService.customToast(
                'Fee not found your selected appointment type!',
                'warning'
              );
              this.totalFee = 0;
              return;
            }
            (this.totalFee = fees?.totalFee), (this.selectedFeesInfo = fees);
          });
        } else {
          this.TosterService.customToast(
            'Fee not found your selected appointment type!',
            'warning'
          );
        }

        // this.totalFee = fees?.totalFee;
        // this.selectedFeesInfo = fees.selectedFeesInfo;
      });

    // let selectedItemCount = 0;

    // // Combine the changes by adding them together
    // selectedItem1$
    //   .pipe(combineLatestWith([selectedItem2$, selectedItem3$, selectedItem4$]))
    //   .subscribe((data: any) => {
    //     let finalFilter: any = [];
    //     let isMatchFound = false;
    //     const day = dayFromDate(String(data[0]));

    //     if (data[3] == 0) {
    //       this.showAppointmentTypeSelectBox = true;
    //       this.filterData = finalFilter;
    //       this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
    //         finalFilter
    //       );
    //       return;
    //     }
    //     if (data[0] && data[1]) {
    //       this.showAppointmentTypeSelectBox = false;
    //       selectedItemCount = 3;
    //       const scheduleMap = new Map();
    //       schedule.forEach((item: any) => {
    //         this.filterDoctorId = item.doctorProfileId;
    //         const key = `${item.scheduleName}`;
    //         if (!scheduleMap.has(key)) {
    //           scheduleMap.set(key, []);
    //         }
    //         scheduleMap.get(key).push(item);
    //       });
    //       const keyToSearch = `${data[1]}`;
    //       if (scheduleMap.has(keyToSearch)) {
    //         const items = scheduleMap.get(keyToSearch);
    //         items.forEach((item: any) => {
    //           const availableSessions = this.isDayAvailable(
    //             item.doctorScheduleDaySession,
    //             day
    //           );
    //           if (availableSessions.length > 0) {
    //             finalFilter = availableSessions.map((session: any) => {
    //               let left = this.getLeftSlotForBooking(item, data[0])[
    //                 session.id
    //               ];
    //               return {
    //                 ...session,
    //                 leftPatient: left,
    //               };
    //             });
    //             isMatchFound = true;
    //             return;
    //           } else {
    //             this.showEmptySlot = "No slot is available! Please change appointment date or hospital/chamber."
    //           }
    //         });
    //       }
    //     }
    //     this.showAppointmentTypeSelectBox = true;
    //     this.filterData = finalFilter;
    //     console.log(finalFilter);

    //     this.selectedSlotInfo = {}
    //     this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
    //       finalFilter
    //     );

    //   });

    // selectedItem2$
    //   .pipe(combineLatestWith(selectedItem4$))
    //   .subscribe((data: any) => {
    //     const feeEntry = schedule.filter((entry: any) => {
    //       return entry.scheduleName === data[0];
    //     });
    //     if (feeEntry) {
    //       feeEntry.map((fee: any) => {
    //         let fees = fee.doctorFeesSetup.find((f: any) =>
    //           f.appointmentType == data[1] ? f.totalFee : ''
    //         );
    //         this.totalFee = fees?.totalFee;
    //         this.selectedFeesInfo = fees;
    //       });
    //     } else {
    //       console.log(
    //         'Fee not found for the given schedule and appointment type.'
    //       );
    //     }
    //   });
  }

  // getLeftSlotForBooking(item: any, selectedDate: string) {
  //   // Create a dictionary to store the booked appointments count per session and date
  //   const bookedAppointments: any = {};

  //   // Loop through the appointment objects to count booked appointments per session and date
  //   item.appointments.forEach((appointment: any) => {
  //     const sessionId = appointment.doctorScheduleDaySessionId;
  //     const appointmentDate = appointment.appointmentDate.split('T')[0]; // Extract the date portion

  //     if (!bookedAppointments[sessionId]) {
  //       bookedAppointments[sessionId] = {};
  //     }

  //     if (!bookedAppointments[sessionId][appointmentDate]) {
  //       bookedAppointments[sessionId][appointmentDate] = 1;
  //     } else {
  //       bookedAppointments[sessionId][appointmentDate]++;
  //     }
  //   });

  //   // Calculate the left number of patients for each session and date
  //   const leftNoOfPatients: any = {};

  //   item.doctorScheduleDaySession.forEach((session: any) => {
  //     const sessionId = session.id;
  //     const sessionDate = selectedDate.split('T')[0]; // Extract the date portion
  //     const bookedCount =
  //       (bookedAppointments[sessionId] &&
  //         bookedAppointments[sessionId][sessionDate]) ||
  //       0;

  //     leftNoOfPatients[sessionId] = session.noOfPatients - bookedCount;
  //   });

  //   // Return the available slots for the selected date
  //   return leftNoOfPatients;
  // }

  dateFilter: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!date) {
      return false; // Handle null case if needed
    }
    const day = date.getDay();
    return !this.disabledDays.includes(day);
  };

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
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      mobile: ['', Validators.required],
    });
    this.form = this.fb.group({
      consultancyType: [''],
      doctorScheduleType: ['0', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentType: ['0', Validators.required],
    });
    this.createPatientForm = this.fb.group({
      isSelf: [false, Validators.required],
      patientName: ['', Validators.required],
      patientProfileId: [''],
      age: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{0,2}$/)]],
      gender: ['0', Validators.required],
      bloodGroup: ['0', Validators.required],
      patientMobileNo: [
        '',
        [Validators.required, Validators.pattern(/^(?:88)?[0-9]{11}$/)],
      ],
      patientEmail: [
        '' || this.profileInfo?.email || 'admin@gmail.com',
        Validators.required,
      ],
      createdBy: [this.profileInfo.fullName, Validators.required],
      creatorEntityId: [this.profileInfo.id, Validators.required],
      creatorRole: [
        this.sessionRole == 'patient' ? 'patient' : 'agent',
        Validators.required,
      ],
    });
  }

  // change step
  onStepChange(e: number) {
    if (e >= 0 && e < 3) {
      this.activeTab = e;
    }

    if (e === 3 && this.form.valid) {
      this.isLoading = true;
      this.formSubmitted = true;
      if (
        this.filterData.length <= 0 &&
        !this.selectedSlotInfo?.doctorScheduleId
      ) {
        this.TosterService.customToast(
          'No slot found your selected options!',
          'warning'
        );
        return;
      }

      const { doctorScheduleId, id, scheduleDayofWeek } = this.selectedSlotInfo;
      const finalSchedule = this.doctorData.doctorScheduleInfo.find(
        (res: any) => res.id === doctorScheduleId
      );

      if (finalSchedule && finalSchedule.consultancyType) {
        let plFeeIn: any = '';
        let agentFeeIn: any = '';
        let plFee: any = 0;
        let agentFee: any = 0;
        let calculatedPlFee: any = 0;
        let calculatedAgentFee: any = 0;

        if (this.sessionRole == 'agent') {
          if (finalSchedule.consultancyType == 1) {
            agentFeeIn = this.serviceFeeList.find(
              (f) => f.platformFacilityId == 4
            )?.externalAmountIn;
            agentFee = this.serviceFeeList.find(
              (f) =>
                f.platformFacilityId == 4 && f.externalAmountIn == agentFeeIn
            )?.externalAmount;
            if (agentFeeIn == 'Percentage') {
              calculatedAgentFee =
                this.selectedFeesInfo.totalFee * (agentFee / 100);
            } else if (agentFeeIn == 'Flat') {
              calculatedAgentFee = agentFee;
            }
          } else if (finalSchedule.consultancyType == 2) {
            agentFeeIn = this.serviceFeeList.find(
              (f) => f.platformFacilityId == 5
            )?.externalAmountIn;
            agentFee = this.serviceFeeList.find(
              (f) =>
                f.platformFacilityId == 5 && f.externalAmountIn == agentFeeIn
            )?.externalAmount;
            if (agentFeeIn == 'Percentage') {
              calculatedAgentFee =
                this.selectedFeesInfo.totalFee * (agentFee / 100);
            } else if (agentFeeIn == 'Flat') {
              calculatedAgentFee = agentFee;
            }
          }
        }

        if (finalSchedule.consultancyType == 1) {
          plFeeIn = this.serviceFeeList.find(
            (f) => f.platformFacilityId == 1
          )?.amountIn;
          plFee = this.serviceFeeList.find(
            (f) => f.platformFacilityId == 1 && f.amountIn == plFeeIn
          )?.amount;
          if (plFeeIn == 'Percentage') {
            calculatedPlFee = this.selectedFeesInfo.totalFee * (plFee / 100);
          } else if (plFeeIn == 'Flat') {
            calculatedPlFee = plFee;
          }
        } else if (finalSchedule.consultancyType == 2) {
          plFeeIn = this.serviceFeeList.find(
            (f) => f.platformFacilityId == 2
          )?.amountIn;
          plFee = this.serviceFeeList.find(
            (f) => f.platformFacilityId == 2 && f.amountIn == plFeeIn
          )?.amount;
          if (plFeeIn == 'Percentage') {
            calculatedPlFee = this.selectedFeesInfo.totalFee * (plFee / 100);
          } else if (plFeeIn == 'Flat') {
            calculatedPlFee = plFee;
          }
        }

        this.formSubmitted = true;
        const {
          consultancyType,
          doctorChamberId,
          doctorProfileId,
          scheduleType,
          chamber,
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
          doctorChamberName: chamber,
          scheduleType,
          doctorScheduleDaySessionId: id,
          scheduleDayofWeek,
          appointmentType,
          appointmentDate,
          appointmentTime: '',
          doctorFeesSetupId: this.selectedFeesInfo.id,
          doctorFee: this.selectedFeesInfo.totalFee,
          agentFee: calculatedAgentFee,
          platformFee: calculatedPlFee,
          totalAppointmentFee:
            this.selectedFeesInfo.totalFee +
            calculatedPlFee +
            calculatedAgentFee, //this.selectedFeesInfo.totalFee,
          appointmentStatus: 1,
          appointmentPaymentStatus: 2,
          appointmentCreatorId: user?.id,
          appointmentCreatorRole:
            this.sessionRole == 'patient' ? 'patient' : 'agent',
        };

        if (infoForBooking && user) {
          this.bookingInfo = infoForBooking;
          this.formSubmitted = true;
          if (this.bookingForm.get('bookMyself')?.value == 'bookMyself') {
            const obj = {
              id: user?.id,
              patientName: user.fullName,
              patientCode: user.patientCode,
              patientEmail: user.email ? user.email : 'admin@gmail.com',
              patientMobileNo: user.mobileNo,
            };

            this.PatientProfileService.update(obj).subscribe((res) => {
              // this.createAppointment(infoForBooking, e);
              this.activeTab = e;
              this.isLoading = false;
            });
          }

          if (this.bookingForm.get('bookOther')?.value == 'bookOther') {
            // this.createAppointment(infoForBooking, e);
            this.activeTab = e;
            this.isLoading = false;
          }
          return;
        }
        // this.stepHeading = 'Confirm';
      } else {
        this.formSubmitted = true;
        this.TosterService.customToast('Please select a slot', 'warning');
        this.isLoading = false;
      }
    } else if (e === 3 && !this.form.valid) {
      this.formSubmitted = true;
      this.TosterService.customToast(
        'Please select all the required fields',
        'warning'
      );
      this.isLoading = false;
    } else {
      return;
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
    this.formSubmitted = true;

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
              creatorRole: data.creatorRole,
            });

            //  this.createPatientForm.patchValue(data);
          }
          return;
        })
      );
    }
  }

  closeDialogs() {
    this.selectedSlotInfo = '';
    this.dialogRef.close(false);
  }
}
