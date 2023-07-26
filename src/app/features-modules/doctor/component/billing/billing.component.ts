import { Component } from '@angular/core';
import { slideInFrom } from 'src/app/animation';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  animations: [slideInFrom('left')],
})
export class BillingComponent {
  animationDirection = 'left';
}
