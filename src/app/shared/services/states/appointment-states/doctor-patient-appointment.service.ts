import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { AppointmentService } from 'src/app/proxy/services';

@Injectable({
  providedIn: 'root'
})
export class DoctorPatientAppointmentService {

  private appointmentList: any[] = [];
  constructor(private AppointmentService : AppointmentService) { }

  private cache: { [key: string]: any } = {};

  getAllAppointmentList(id: number, user: string): Observable<any> {
    const cacheKey = `${user}-${id}`;
    
    // Check if data is already in cache
    console.log(this.cache[cacheKey]);
    if (this.cache[cacheKey]) {
      
      return of(this.cache[cacheKey]);
    }
    
    if (user === "patient") {
      return this.AppointmentService.getAppointmentListByPatientId(id).pipe(
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
      return this.AppointmentService.getAppointmentListByDoctorId(id).pipe(
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
