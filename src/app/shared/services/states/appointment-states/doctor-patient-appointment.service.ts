import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { AppointmentService } from 'src/app/proxy/services';

@Injectable({
  providedIn: 'root'
})
export class DoctorPatientAppointmentService {

  private appointmentList: any[] = [];
  // private appointmentListCache: any[] = [];
  // private appointmentListSubject = new BehaviorSubject<any[]>(this.appointmentListCache);
  // appointmentList$ = this.appointmentListSubject.asObservable();
  constructor(private AppointmentService : AppointmentService) { }



  // getAllAppointmentList(id:number, user:string){
  //     if (user == "patient") {
  //       this.AppointmentService.geAppointmentListByPatientId(id).subscribe(
  //         (e) => {
  //           this.appointmentListSubject.next(e);
  //           console.log(e);
  //         }
  //       );
  //     } 
  //     if (user == "doctor") {  
  //       this.AppointmentService.geAppointmentListByDoctorId(id).subscribe(
  //         (e) => {
  //           this.appointmentListSubject.next(e);
  //           console.log(e);
  //         }
  //       );
  //     }
  //   return this.appointmentListSubject.asObservable();
  // }

  private cache: { [key: string]: any } = {};

  getAllAppointmentList(id: number, user: string): Observable<any> {
    const cacheKey = `${user}-${id}`;
    
    // Check if data is already in cache
    if (this.cache[cacheKey]) {
      return of(this.cache[cacheKey]);
    }
    
    if (user === "patient") {
      return this.AppointmentService.geAppointmentListByPatientId(id).pipe(
        map((data) => {
          this.appointmentList = data;
          this.cache[cacheKey] = data; // Cache the data
          console.log(data);
          return data;
        }),
        catchError(error => {
          // Handle errors here if needed
          return of(null);
        })
      );
    }
    
    if (user === "doctor") {
      return this.AppointmentService.geAppointmentListByDoctorId(id).pipe(
        map((data) => {
          this.appointmentList = data;
          this.cache[cacheKey] = data; // Cache the data
          console.log(data);
          return data;
        }),
        catchError(error => {
          // Handle errors here if needed
          return of(null);
        })
      );
    }
    
    return of(null); // Return an empty Observable
  }
}
