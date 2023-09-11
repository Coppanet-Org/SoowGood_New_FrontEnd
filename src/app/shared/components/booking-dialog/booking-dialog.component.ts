import { TosterService } from 'src/app/shared/services/toster.service';

import { LoaderService } from './../../services/loader.service';
import { PatientProfileService } from 'src/app/proxy/services';
import { UserinfoStateService } from 'src/app/shared/services/userinfo-state.service';
import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  bookingFilterInputData,
  inputForCreatePatient,
} from '../../utils/input-info';
import { distinctUntilChanged, map, merge, scan } from 'rxjs';
import { fromEvent } from 'rxjs';
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
  constructor(
    private fb: FormBuilder,
    private UserinfoStateService: UserinfoStateService,
    private PatientProfileService: PatientProfileService,
    private LoaderService: LoaderService,
    private TosterService: TosterService
  ) {
    this.bookingForm = this.fb.group({
      bookMyself: [false],
      bookOther: [false],
      patientName: [''],
      age: [''],
      mobile: [''],
    });
    this.inputConfigs = bookingFilterInputData(
      [
        {
          id: 0,
          name: 'udoy',
        },
      ],
      [
        {
          id: 0,
          name: 'udoy',
        },
      ]
    );
    this.inputForCreatePatient = inputForCreatePatient;
  }

  ngOnInit() {
    this.UserinfoStateService.getData().subscribe((e) => {
      this.profileInfo = e;
      if (e) {
        this.loadForm();
      }
    });
  }
  onStepChange(e: any) {
    this.activeTab = e;
  }

  userExistCheck(status: string): void {
    switch (status) {
      case 'new-user':
        this.isNewUser = true;
        this.isExistUser = false;
        return;
      case 'exist-user':
        this.isNewUser = false;
        this.isExistUser = true;
        return;
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
      age: [10, Validators.required],
      gender: [1, Validators.required],
      bloodGroup: ['', Validators.required],
      patientMobileNo: ['', Validators.required],
      patientEmail: ['' || this.profileInfo?.email, Validators.required],
      createdBy: [this.profileInfo.fullName, Validators.required],
      creatorEntityId: [this.profileInfo.id, Validators.required],
    });
  }

  createNewPatient(): void {
    console.log(this.createPatientForm.value);

    try {
      this.btnLoader = true;
      this.PatientProfileService.create(this.createPatientForm.value).subscribe(
        (res) => {
          this.btnLoader = false;
          this.TosterService.customToast('Your patient is created!', 'success');
          this.onStepChange(3);
        }
      );
    } catch (error) {
      this.TosterService.customToast('Something wrong! Please retry', 'error');
    }
    
  }
  closeDialogs() {}
}
