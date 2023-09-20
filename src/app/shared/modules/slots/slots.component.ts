import { Component } from '@angular/core';
import { DoctorScheduleStateService } from '../../services/states/doctor-schedule-state.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  slotList: any[]=[];
  constructor(private DoctorScheduleStateService: DoctorScheduleStateService) {
    this.DoctorScheduleStateService.getDoctorAvailableSlotData().subscribe((e) => (this.slotList = e));
  }
}
