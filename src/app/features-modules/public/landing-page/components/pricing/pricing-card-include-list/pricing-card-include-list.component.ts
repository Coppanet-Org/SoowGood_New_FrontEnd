import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card-include-list',
  templateUrl: './pricing-card-include-list.component.html',
  styleUrls: ['./pricing-card-include-list.component.scss'],
})
export class PricingCardIncludeListComponent {
  @Input() include: any = '';
}
