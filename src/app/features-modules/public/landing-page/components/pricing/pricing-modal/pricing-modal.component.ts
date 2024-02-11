import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pricing-modal',
  templateUrl: './pricing-modal.component.html',
  styleUrls: ['./pricing-modal.component.scss'],
})
export class PricingModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PricingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any | undefined
  ) {}
}
