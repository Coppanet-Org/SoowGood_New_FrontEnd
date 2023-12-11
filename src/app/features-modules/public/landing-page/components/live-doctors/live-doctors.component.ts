
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss']
})
export class LiveDoctorsComponent {
  
liveDoctorList:any
  constructor(private DoctorStateService : DoctorStateService){

    this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
      next:(res)=>{
        this.liveDoctorList = res
      },
      error:(err)=>{
        console.log(err);
      },
      complete() {
        console.log("completed");
      },
    })
  }






}
