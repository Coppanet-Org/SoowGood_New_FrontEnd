import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DegreeDialogComponentnt } from '../degree-dialog/degree-dialog.component';
import { TosterService } from 'src/app/shared/services/toster.service';

@Component({
  selector: 'app-specialization-dialog',
  templateUrl: './specialization-dialog.component.html',
  styleUrls: ['./specialization-dialog.component.scss']
})
export class SpecializationDialogComponent implements OnInit {
  isLoading: boolean = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private normalAuth: AuthService,
    public dialogRef: MatDialogRef<SpecializationDialogComponent>,
    private tosterService: TosterService,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) {}

  ngOnInit(): void {
    this.loadForm();
    
  }

  loadForm() {
    this.form = this.fb.group({

      // degreeId: ['', Validators.required],

    });
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
