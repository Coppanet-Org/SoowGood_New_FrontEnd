import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partners-card',
  templateUrl: './partners-card.component.html',
  styleUrl: './partners-card.component.scss',
})
export class PartnersCardComponent {
  @Input() image!: string;
}
