import { Component, Input, OnInit } from '@angular/core';
import { DoctorPatientAppointmentService } from '../../services/states/appointment-states/doctor-patient-appointment.service';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss'],
})
export class AllAppointmentsComponent implements OnInit {
  @Input() id!: number;
  @Input() user!: string;
  dataLoading: boolean = false;
  appointmentList: any[] = [];
  notFound: boolean = false;
  constructor(
    private DoctorPatientAppointmentService: DoctorPatientAppointmentService
  ) {}
  ngOnInit(): void {
    this.DoctorPatientAppointmentService.appointmentList.subscribe((res) => {
      if (res.length > 0) {
        this.appointmentList = res;
      } else {
        if (this.id && this.user) {
          try {
            this.dataLoading = true;
            this.DoctorPatientAppointmentService.getAllAppointmentList(
              this.id,
              this.user
            ).subscribe((res) => {
              if (res.length > 0) {
                this.appointmentList = res;
                this.dataLoading = false;
                this.notFound = false;
              }else{
                this.notFound = true;
              }
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log('doctor id not found');
        }
      }
    });
  }
}
