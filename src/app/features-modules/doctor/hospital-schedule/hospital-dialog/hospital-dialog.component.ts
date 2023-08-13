import { DoctorChamberService } from './../../../../proxy/services/doctor-chamber.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-hospital-dialog',
  templateUrl: './hospital-dialog.component.html',
  styleUrls: ['./hospital-dialog.component.scss'],
})
export class HospitalDialogComponent implements OnInit {
  form!: FormGroup;
  doctorId: any;
  error!: boolean;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HospitalDialogComponent>,
    private DoctorChamberService: DoctorChamberService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) {}

  ngOnInit(): void {
 
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.loadForm(authInfo.id);
      this.doctorId = authInfo.id;
    }
  }

  loadForm(id:any) {
    this.form = this.fb.group({
      doctorId: [id, Validators.required],
      chamberName: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
  submit() {
    if (!this.form.valid || !this.form.touched) {
      console.log(this.form.value);
      
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.DoctorChamberService.create(this.form.value).subscribe((res) => {
      if (res) {
        this.tosterService.customToast('Successfully updated!', 'success');
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
