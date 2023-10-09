import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppointmentService } from 'src/app/proxy/services';

@Injectable({
  providedIn: 'root'
})
export class DoctorPatientAppointmentService {

  public appointmentList = new BehaviorSubject<any>([]);
  constructor(private AppointmentService : AppointmentService) { }


  sendAppointmentListData(data:any[]){
    this.appointmentList.next(data);
  }
  getAllAppointmentList(id:number, user:string){
      if (user == "patient") {
        this.AppointmentService.geAppointmentListByPatientId(id).subscribe(
          (e) => {
            this.sendAppointmentListData(e)
            console.log(e);
          }
        );
      } 
      if (user == "doctor") {  
        this.AppointmentService.geAppointmentListByDoctorId(id).subscribe(
          (e) => {
            this.sendAppointmentListData(e)
            console.log(e);
          }
        );
      }
    return this.appointmentList.asObservable();
  }
}
