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

  //getAllDoctorList(nama?: any, consultancy?: any, speciality?: any, specialization?:any, filter?:FilterModel) {
  //  this.DoctorProfileService.getDoctorDetailsList(nama,consultancy,speciality,specialization,filter).subscribe(
  //    (e) => {
  //      this.sendDoctorListData(e)
  //    }
  //  );
  //  return this.getDoctorListData()
  //}
}
