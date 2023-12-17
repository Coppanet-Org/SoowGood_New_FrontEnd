import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DoctorProfileService } from 'src/app/proxy/services';
import { FilterModel } from '../../../../proxy/dto-models';
import { ConsultancyType } from '../../../../proxy/enums';

@Injectable({
  providedIn: 'root'
})
export class DoctorStateService {
  public doctorsList = new BehaviorSubject<any>([]);
  public currentlyOnlineDoctor = new BehaviorSubject<any>([]);
  constructor(private DoctorProfileService : DoctorProfileService) { }
  getDoctorListData(){
    return this.doctorsList.asObservable();
  }
  getCurrentlyOnlineDoctorData(){
    return this.currentlyOnlineDoctor.asObservable();
  }
  sendDoctorListData(data:any[]){
    this.doctorsList.next(data);
  }
  sendCurrentlyOnlineDoctorData(data:any[]){
    this.currentlyOnlineDoctor.next(data);
  }
//all doctors
  getAllDoctorList(){
    this.DoctorProfileService.getList().subscribe(
      (e) => {
        this.sendDoctorListData(e)
      }
    );
    return this.getDoctorListData()
  }

  //all current online doctors
  getCurrentlyOnlineDoctorList(){
    this.DoctorProfileService.getCurrentlyOnlineDoctorList().subscribe(
      (e) => {
        this.sendCurrentlyOnlineDoctorData(e)
      }
    );
    return this.getCurrentlyOnlineDoctorData()
  }


  //getAllDoctorList(nama?: any, consultancy?: any, speciality?: any, specialization?:any, filter?:FilterModel) {
  //  this.DoctorProfileService.getDoctorDetailsList(nama,consultancy,speciality,specialization,filter).subscribe(
  //    (e) => {
  //      this.sendDoctorListData(e)
  //    }
  //  );
  //  return this.getDoctorListData()
  //}
}
