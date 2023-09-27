import { Component } from '@angular/core';
import { DoctorScheduleStateService } from '../../services/states/doctor-schedule-state.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  slotList: any[]=[];
  constructor(private DoctorScheduleStateService: DoctorScheduleStateService) {
    this.DoctorScheduleStateService.getDoctorAvailableSlotData().pipe(
      filter((e)=> e)
    ).subscribe(filteredData => {
  
      console.log(filteredData)
      
      this.slotList = filteredData;
    });
  }
}
