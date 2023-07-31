import { DoctorSpecializationService } from './../../../../proxy/services/doctor-specialization.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TosterService } from 'src/app/shared/services/toster.service';
import { DoctorProfileService } from './../../../../proxy/services/doctor-profile.service';
import { SpecializationService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-specialization-dialog',
  templateUrl: './specialization-dialog.component.html',
  styleUrls: ['./specialization-dialog.component.scss'],
})
export class SpecializationDialogComponent implements OnInit {
  isLoading: boolean = false;
  form!: FormGroup;
  profileInfo: any;
  specializationList: any = [];
  doctorId: any;
  specialityId: any;
  constructor(
    private fb: FormBuilder,
    // private normalAuth: AuthService,
    public dialogRef: MatDialogRef<SpecializationDialogComponent>,
    private tosterService: TosterService,
    private specializationService: SpecializationService,
    private doctorSpecializationService: DoctorSpecializationService,
    private doctorProfileService: DoctorProfileService,
    private normalAuth: AuthService,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) {}

  ngOnInit(): void {
    this.loadForm();
    let authId = this.normalAuth.authInfo().id;
    this.doctorId = authId;
    if (authId) {
      this.doctorProfileService.get(authId).subscribe((res) => {
        this.form.patchValue(res);
        if (res.specialityId) {
          this.specialityId = res.specialityId;
          this.specializationService
            .getListBySpecialtyId(res.specialityId)
            .subscribe((list) => (this.specializationList = list));
        }
      });
    }
  }

  loadForm() {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      specializationId: ['', Validators.required],
    });
  }

  saveSpecialization(): void {
    // "doctorId": 0,
    // "specialityId": 0,
    if (!this.form.valid && !this.form.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    let formValue: any = this.form.value;

    const newSpecialization = {
      ...formValue,
      doctorId: this.doctorId,
      specialityId: this.specialityId,
    };
    if (!this.editData) {
      this.doctorSpecializationService
        .create(newSpecialization)
        .subscribe((res) => {
          if (res) {
            this.tosterService.customToast('Successfully added!', 'success');
            this.dialogRef.close(true);
          }
        });
        
    } 
    return
    

  }

  // sendDataToParent() {
  //   let degreeId = this.form.get('degreeId')?.value;
  //   let duration = this.form.get('duration')?.value;
  //   const newDegreeData = {
  //     ...this.form.value,
  //     degreeId: Number(degreeId),
  //     duration: Number(duration),
  //     doctorId: this.doctorId,
  //   };

  //   if (!this.form.valid && !this.form.touched) {
  //     this.tosterService.customToast(
  //       'Please fill all the required fields!',
  //       'warning'
  //     );
  //     return;
  //   }

  //   if (!this.editData) {
  //     this.doctorDegreeService.create(newDegreeData).subscribe((res) => {
  //       if (res) {
  //         this.tosterService.customToast('Successfully added!', 'success');
  //         this.dialogRef.close(true);
  //       }
  //     });
  //   } else {
  //     let changedProperties: string[] = [];
  //     let exData: any = this.editData;
  //     for (const key in newDegreeData) {
  //       if (
  //         newDegreeData.hasOwnProperty(key) &&
  //         newDegreeData[key] !== exData[key]
  //       ) {
  //         changedProperties.push(key);
  //       }
  //     }

  //     if (changedProperties.length < 1) {
  //       this.dialogRef.close(false);
  //       return;
  //     } else {
  //       this.doctorDegreeService
  //         .update({ ...newDegreeData, id: this.editData.id })
  //         .subscribe((res) => {
  //           if (res) {
  //             this.tosterService.customToast(
  //               'Successfully updated!',
  //               'success'
  //             );
  //             this.dialogRef.close(true);
  //           } else {
  //             this.tosterService.customToast(
  //               'Something went wrong! Please contact your administrator.',
  //               'error'
  //             );
  //             this.dialogRef.close(false);
  //           }
  //         });
  //     }
  //   }
  // }
}
