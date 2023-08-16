import { DoctorFeeSetupService } from './../../../../proxy/services/doctor-fee-setup.service';
import { HospitalStateService } from './../../../../shared/services/hospital-state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TosterService } from 'src/app/shared/services/toster.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { feesInputData } from 'src/app/shared/utils/input-info';
import { AppointmentType, ScheduleType } from 'src/app/proxy/enums';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorScheduleService } from 'src/app/proxy/services';
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
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FeeDialogComponent>,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    private DoctorScheduleService: DoctorScheduleService,
private DoctorFeeSetupService : DoctorFeeSetupService,
    private HospitalStateService: HospitalStateService,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) {}

  ngOnInit(): void {
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.loadForm(authInfo.id);
      this.doctorId = authInfo.id;
    }
    let appointmentType = CommonService.getEnumList(AppointmentType);

    this.DoctorScheduleService.getScheduleListByDoctorId(this.doctorId).subscribe((res) => {
      if (res && appointmentType) {
      let list = res.map((e)=> {return { name: e.scheduleName, id:e.id}})

        this.feesData = feesInputData(appointmentType, list);
      } else {
        return;
      }
    });
  }

  loadForm(id: any) {
    this.form = this.fb.group({
      doctorProfileId: [id, Validators.required],
      doctorScheduleId: ['', Validators.required],
      appointmentType: ['', Validators.required],
      currentFee: ['', Validators.required],
      discount: ['', Validators.required],
      discountPeriod: ['', Validators.required],
      previousFee: ['', Validators.required],
      feeAppliedFrom: ['', Validators.required],
      followUpPeriod: ['', Validators.required],
      reportShowPeriod: ['', Validators.required],
      discountAppliedFrom: ['', Validators.required],
      totalFee: ['', Validators.required],
    });
  }

  submit() {
    if (!this.form.valid) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }

    
    this.DoctorFeeSetupService.create(this.form.value).subscribe((res) => {
      if (res) {
        this.tosterService.customToast('Successfully created!', 'success');
        this.dialogRef.close(true);
      } else {
        this.tosterService.customToast(
          'Something went wrong! Please contact your administrator.',
          'error'
        );
        this.dialogRef.close(false);
      }
    });
  }
}
// "doctorScheduleId": 0,
// "appointmentType": 1,
// "currentFee": 0,
// "previousFee": 0,
// "feeAppliedFrom": "2023-08-15T10:29:33.669Z",
// "followUpPeriod": 0,
// "reportShowPeriod": 0,
// "discount": 0,
// "discountAppliedFrom": "2023-08-15T10:29:33.669Z",
// "discountPeriod": 0,
// "totalFee": 0,
// "isActive": true
