import { Component, Input } from '@angular/core';
import { PlatformFacilityDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-service-card',

  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() serviceDetails!: PlatformFacilityDto;
}
