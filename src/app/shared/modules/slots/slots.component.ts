import { Component } from '@angular/core';
import { SlotsService } from '../../services/states/slots.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  slotList: any[]=[];
  constructor(private SlotsService: SlotsService) {
    this.SlotsService.getSlotData().subscribe((e) => (this.slotList = e));
  }
}
