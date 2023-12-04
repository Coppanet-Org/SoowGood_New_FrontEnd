import { Component, Input, OnInit } from '@angular/core';
import { DoctorPatientAppointmentService } from '../../services/states/appointment-states/doctor-patient-appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterInputModel } from '../../utils/models/models';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
// import { fadeInAnimation, fadeInExpandOnEnterAnimation, fadeInOnEnterAnimation, zoomInAnimation, zoomInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss'],
  // animations: [
  //   fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000 }),

  // ]
})
export class AllAppointmentsComponent implements OnInit {
  @Input() id!: number;
  @Input() user!: string;
  animationDirection = 'bottom';
  dataLoading: boolean = false;
  appointmentList: any[] = [];
  skelton: boolean = false;
  appointmentListCache: any;
  appointmentListSubject: any;
  noDataAvailable!: boolean;

  consultancyType: any = [];
  specialityList: any = [];
  specializationList: any = [];

  filter!: FormGroup;
  filterInput!: FilterInputModel
  constructor(
    private DoctorPatientAppointmentService: DoctorPatientAppointmentService,
    private fb: FormBuilder
  ) {
    this.filterInput = {
      fields: {
        searchField: {
          formControlName: 'search',
        },
        filterField: [
          {
            label: 'Appointment Date',
            fieldType: 'date',
            formControlName: 'appointmentDate',
          },
          {
            label: 'Consultancy Type',
            fieldType: 'select',
            formControlName: 'consultancyType',
            options: CommonService.getEnumList(ConsultancyType)
          },
        ],
      },
    };
    this.filter = this.fb.group({});
  }
  ngOnInit(): void {
    
    if (this.id && this.user) {
      this.dataLoading = true;
      this.skelton = true;
      this.DoctorPatientAppointmentService.getAllAppointmentList(
        this.id,
        this.user
      )
        .subscribe({
          next: (res) => {
            if (res.length === 0) {
              this.appointmentList = [];
              this.skelton = false;
              this.noDataAvailable = true;
            } else {
              this.appointmentList = res;
              this.skelton = false;
              this.noDataAvailable = false;
            }
          },
          error: (error) => {
            this.skelton = true;
          },
        })
        .add(() => {
          this.dataLoading = false;
        });
    } else {
      console.log('Doctor ID not found');
    }
  }

  searchChanged(e:string){
    console.log(e);
    

  }
}
