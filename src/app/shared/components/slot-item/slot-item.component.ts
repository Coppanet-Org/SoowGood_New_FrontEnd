import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slot-item',
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.scss'],
})
export class SlotItemComponent {
  @Input() item: any;
}
