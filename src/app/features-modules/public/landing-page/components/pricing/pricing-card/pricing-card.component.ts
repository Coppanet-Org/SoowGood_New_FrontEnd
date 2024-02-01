import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingModalComponent } from '../pricing-modal/pricing-modal.component';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input() details!: any;
  selectedPlan: string = 'monthly';
  constructor(public dialog: MatDialog) {}
  getStartNow() {
    const dialogRef = this.dialog.open(PricingModalComponent, {});
  }
}
