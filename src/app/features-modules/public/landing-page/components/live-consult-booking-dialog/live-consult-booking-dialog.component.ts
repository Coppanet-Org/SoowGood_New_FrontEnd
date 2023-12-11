import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-consult-booking-dialog',
  templateUrl: './live-consult-booking-dialog.component.html',
  styleUrls: ['./live-consult-booking-dialog.component.scss'],
})
export class LiveConsultBookingDialogComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  bookingForm!: FormGroup;
  thirdFormGroup!:FormGroup;
  fourFormGroup!:FormGroup;
  bookingInfo=[]
  activeTab:number=0
  constructor(
    public dialogRef: MatDialogRef<LiveConsultBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public doctorData: any | undefined,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.bookingForm = this.fb.group({});
  }

  onStepChange(step: number) {
    this.activeTab = step
  }
  
}
