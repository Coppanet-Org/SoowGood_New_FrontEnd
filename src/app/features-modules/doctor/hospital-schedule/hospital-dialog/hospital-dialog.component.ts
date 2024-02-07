import { DoctorChamberService } from './../../../../proxy/services/doctor-chamber.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { countries } from 'src/app/shared/utils/country';

@Component({
  selector: 'app-hospital-dialog',
  templateUrl: './hospital-dialog.component.html',
  styleUrls: ['./hospital-dialog.component.scss'],
})
export class HospitalDialogComponent implements OnInit {
  form!: FormGroup;
  doctorId: any;
  error!: boolean;
  formSubmitted: boolean = false;
  countryList = countries;
  isLoading: boolean = false;
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
    if (this.editData) {
      this.form.patchValue(this.editData);
    }
    return;
  }

  loadForm(id: any) {
    this.form = this.fb.group({
      doctorProfileId: [id, Validators.required],
      chamberName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['Bangladesh', Validators.required],
      address: ['', Validators.required],
      zipCode: [''],
    });
  }
  submit() {
    this.formSubmitted = true;
    const { doctorProfileId, chamberName, city, country, address } =
      this.form.value;
    if (!doctorProfileId || !chamberName || !city || !country || !address) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.isLoading = true;
    if (this.editData) {
      this.DoctorChamberService.update({
        ...this.form.value,
        // doctorProfileId: this.doctorId,
        id: this.editData.id,
      }).subscribe({
        next: (res) => {
          this.tosterService.customToast('Successfully updated!', 'success');
          this.dialogRef.close(true);
          this.isLoading = false;
        },
        error: () => {
          this.tosterService.customToast(
            'Something went wrong! Please contact your administrator.',
            'error'
          );
          this.isLoading = false;
          this.dialogRef.close(false);
        },
      });
    } else {
      this.DoctorChamberService.create(this.form.value).subscribe({
        next: (res) => {
          this.tosterService.customToast('Successfully updated!', 'success');
          this.dialogRef.close(true);
          this.isLoading = false;
        },
        error: () => {
          this.tosterService.customToast(
            'Something went wrong! Please contact your administrator.',
            'error'
          );
          this.isLoading = false;
          this.dialogRef.close(false);
        },
      });
    }
  }
}
