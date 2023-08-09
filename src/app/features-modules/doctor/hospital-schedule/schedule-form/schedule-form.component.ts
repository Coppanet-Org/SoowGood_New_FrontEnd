import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DoctorChamberService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent {
  form!: FormGroup;
  doctorId: any;
  error!: boolean;
  hospitalOptions: any = [
    {
      name: '',
      id: '',
    },
  ];

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays: string[] = [];

  constructor(
    private fb: FormBuilder,
    // public dialogRef: MatDialogRef<ScheduleDialogComponent>,
    // private DoctorChamberService: DoctorChamberService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    //  private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData: any | undefined
  ) {}

  ngOnInit(): void {
    this.loadForm();
    let authInfo = this.normalAuth.authInfo();
    if (authInfo && authInfo.id) {
      this.doctorId = authInfo.id;
    }
  }

  loadForm() {
    this.form = this.fb.group({
      doctorId: [this.doctorId, Validators.required],
      appointmentType: ['', Validators.required],
      hospital: ['', Validators.required],
    });
  }

  toggleDaySelection(day: string) {
    if (this.selectedDays.includes(day)) {
        this.selectedDays = this.selectedDays.filter(d => d !== day);
    } else {
        this.selectedDays.push(day);
    }
  }

  submit() {
    // if (!this.form.valid || !this.form.touched) {
    //   this.tosterService.customToast(
    //     'Please fill all the required fields!',
    //     'warning'
    //   );
    //   return;
    // }
    // this.DoctorChamberService.create(this.form.value).subscribe((res) => {
    //   if (res) {
    //     this.tosterService.customToast('Successfully updated!', 'success');
    //     this.dialogRef.close(true);
    //   } else {
    //     this.tosterService.customToast(
    //       'Something went wrong! Please contact your administrator.',
    //       'error'
    //     );
    //     this.dialogRef.close(false);
    //   }
    // });
  }


    openDialog(day: string) {
        // const dialogRef = this.dialog.open(ScheduleDialogComponent, {
        //     data: { selectedDay: day } // Pass any data you need to the dialog
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     // Handle any actions or data returned from the dialog when it's closed
        // });
    }
}
