import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input() details!: any;
}
