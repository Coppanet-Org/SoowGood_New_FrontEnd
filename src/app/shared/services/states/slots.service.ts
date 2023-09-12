import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SlotsService {
  private doctorSlotList = new BehaviorSubject<any>([]);

  sendSlotData(data: any) {
    this.doctorSlotList.next(data);
  }
  getSlotData() {
    return this.doctorSlotList.asObservable();
  }
  constructor() {}
}
