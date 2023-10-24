import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DoctorProfileService } from 'src/app/proxy/services';

@Injectable({
  providedIn: 'root'
})
export class DoctorStateService {
  public doctorsList = new BehaviorSubject<any>([]);
  constructor(private DoctorProfileService : DoctorProfileService) { }
  getDoctorListData(){
    return this.doctorsList.asObservable();
  }
  sendDoctorListData(data:any[]){
    this.doctorsList.next(data);
  }
  getAllDoctorList(){
    this.DoctorProfileService.getList().subscribe(
      (e) => {
        this.sendDoctorListData(e)
      }
    );
    return this.getDoctorListData()
  }
}
