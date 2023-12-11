
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { Component } from '@angular/core';

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
      
      
        console.log(res);
        
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
