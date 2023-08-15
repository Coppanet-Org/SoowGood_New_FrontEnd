import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalStateService {

  private sharedDataSubject = new Subject<any>();
  private individualScheduleInfo = new Subject<any>();
  private hospitalScheduleFormEvent = new BehaviorSubject<any>(false);

  sendData(data: any) {
    this.sharedDataSubject.next(data);
  }
  getData() {
    return this.sharedDataSubject.asObservable();
  }
  setHospitalScheduleFormEvent(data:boolean){
    this.hospitalScheduleFormEvent.next(data);
  }
  getHospitalScheduleFormEvent(){
    return this.hospitalScheduleFormEvent.asObservable();
  }
  setIndividualScheduleInfo(data:{}){
    this.individualScheduleInfo.next(data);
  }
  getIndividualScheduleInfo(){
    return this.individualScheduleInfo.asObservable();
  }
}
