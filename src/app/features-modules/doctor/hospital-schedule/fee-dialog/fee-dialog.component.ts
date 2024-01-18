import { DoctorFeeSetupService } from './../../../../proxy/services/doctor-fee-setup.service';
import { HospitalStateService } from '../../../../shared/services/states/hospital-state.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TosterService } from 'src/app/shared/services/toster.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { feesInputData } from 'src/app/shared/utils/input-info';
import { AppointmentType, ScheduleType } from 'src/app/proxy/enums';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorScheduleService } from 'src/app/proxy/services';
import { DatePipe } from '@angular/common';
import { ListItem } from 'src/app/shared/model/common-model';

@Component({
  selector: 'app-fee-dialog',
  templateUrl: './fee-dialog.component.html',
  styleUrls: ['./fee-dialog.component.scss'],
})
export class FeeDialogComponent implements OnInit {
  form!: FormGroup;
  doctorId: any;
  feesData: any;
  scheduleType: any;
  formSubmitted: boolean = false;
  appointmentType: ListItem[] = [];
  doctorSchedule: any[] = [];
  hideElement: any;
  showFollowUpPeriod: boolean = true;
  showReportShowPeriod: boolean = true;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FeeDialogComponent>,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    private DoctorScheduleService: DoctorScheduleService,
    private DoctorFeeSetupService: DoctorFeeSetupService,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) { }

  ngOnInit(): void {
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.doctorId = authInfo.id;
    }

    this.loadForm(authInfo.id);

    this.appointmentType = CommonService.getEnumList(AppointmentType);

    this.DoctorScheduleService.getScheduleListByDoctorId(
      this.doctorId
    ).subscribe((res) => {
      if (res) {
        this.doctorSchedule = res.map((e) => {
          return { name: e.scheduleName, id: e.id };
        });
        if (this.editData.id) {
          this.DoctorFeeSetupService.get(this.editData.id).subscribe((res) => {
            let feeAppliedFrom = '';

            this.form.patchValue({
              ...this.editData,
              feeAppliedFrom: feeAppliedFrom,
            });
          });
        }
      }
    });
    this.form.get('discount')?.valueChanges.subscribe((value) => {
      this.calculateTotalFee();
    });
    this.form.get('currentFee')?.valueChanges.subscribe((value) => {
      this.calculateTotalFee();
    });
    this.form.get('appointmentType')?.valueChanges.subscribe((value) => {
      if (value == 1) {
        this.showFollowUpPeriod = false;
        this.showReportShowPeriod = false;
      } else if (value == 2) {
        this.showReportShowPeriod = false;
        this.showFollowUpPeriod = true;
      } else if (value == 3) {
        this.showFollowUpPeriod = false;
        this.showReportShowPeriod = true;
      } else {
        this.showFollowUpPeriod = true;
        this.showReportShowPeriod = true;
      }
    });
  }

  loadForm(id: any) {
    this.form = this.fb.group({
      doctorProfileId: [id, Validators.required],
      doctorScheduleId: ['', Validators.required],
      appointmentType: ['', Validators.required],
      currentFee: ['', Validators.required],
      discount: [''],
      discountPeriod: [''],
      previousFee: [''],
      feeAppliedFrom: [''],
      followUpPeriod: [''],
      reportShowPeriod: [''],
      discountAppliedFrom: [''],
      totalFee: ['', Validators.required],
    });
  }

  submit() {
    this.formSubmitted = true;
    // console.log(this.form.value);

    // if (!this.form.valid) {
    //   this.tosterService.customToast(
    //     'Please fill all the required fields!',
    //     'warning'
    //   );
    //   return;
    // }
    let followUpPeriod =
      this.form.get('followUpPeriod')?.value == ''
        ? 0
        : this.form.get('followUpPeriod')?.value;
    let reportShowPeriod =
      this.form.get('reportShowPeriod')?.value == ''
        ? 0
        : this.form.get('reportShowPeriod')?.value;

    let obj = {
      ...this.form.value,
      followUpPeriod,
      reportShowPeriod,
    };

    if (!this.editData) {
      this.DoctorFeeSetupService.create(obj).subscribe({
        next: (res) => {
          this.tosterService.customToast(String(res.message), res.success == true ? 'success' : 'error');
          this.dialogRef.close(true);
          this.formSubmitted = false;
        },
        error: (err) => {
          this.tosterService.customToast(
            'Something went wrong! Please contact your administrator.',
            'error'
          );
          this.dialogRef.close(false);
          this.formSubmitted = false;
        }
      });
    } else {
      this.DoctorFeeSetupService.update({
        ...obj,
        id: this.editData.id,
      }).subscribe({
        next: (res) => {
          this.tosterService.customToast(String(res.message), res.success == true ? 'success' : 'error');
          this.dialogRef.close(true);
          this.formSubmitted = false;
        },
        error: (err) => {
          this.tosterService.customToast(
            'Something went wrong! Please contact your administrator.',
            'error'
          );
          this.dialogRef.close(false);
          this.formSubmitted = false;
        }
      });
    }
  }

  calculateTotalFee() {
    const currentFee = this.form.get('currentFee')?.value;
    const discount = this.form.get('discount')?.value;

    const totalFee = currentFee - discount;
    this.form.patchValue({
      totalFee: totalFee,
    });
  }
}
