import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { DoctorPatientAppointmentService } from '../../services/states/appointment-states/doctor-patient-appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterInputModel } from '../../utils/models/models';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
import { DataFilterModel, FilterModel } from 'src/app/proxy/dto-models';
import { SubSink } from 'subsink';
import {
  DoctorProfileService,
  AppointmentService,
} from 'src/app/proxy/services';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { fadeInAnimation, fadeInExpandOnEnterAnimation, fadeInOnEnterAnimation, zoomInAnimation, zoomInUpOnEnterAnimation } from 'angular-animations';

import * as signalR from '@microsoft/signalr';
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

  totalCount: any = 0;

  filter!: FormGroup;
  filterInput!: FilterInputModel;
  filterModel: FilterModel = {
    offset: 0,
    limit: 0,
    pageNo: 0,
    pageSize: 10,
    sortBy: 'name',
    sortOrder: 'asc',
    isDesc: false,
  };
  subs = new SubSink();
  doctorFilterDto: DataFilterModel = {} as DataFilterModel;
  userType: any;
  constructor(
    private DoctorPatientAppointmentService: DoctorPatientAppointmentService,
    private fb: FormBuilder,
    private AppointmentService: AppointmentService,
    private route: ActivatedRoute,
    private AuthService: AuthService
  ) {
    this.filterInput = {
      fields: {
        searchField: {
          formControlName: 'appointmentSearch',
        },
        filterField: [
          {
            label: 'Consultancy Type',
            fieldType: 'select',
            formControlName: 'consultancy',
            options: CommonService.getEnumList(ConsultancyType),
          },
          {
            label: 'start date',
            fieldType: 'date-range',
            formControlName: {
              startDate: 'startDate',
              endDate: 'endDate',
            },
          },
        ],
      },
    };
    this.filter = this.fb.group({});
  }

  ngOnInit(): void {
    this.userType = this.AuthService.authInfo().userType;
    // if (this.id && this.user) {
    //   this.dataLoading = true;
    //   this.skelton = true;
    //   this.DoctorPatientAppointmentService.getAllAppointmentList(
    //     this.id,
    //     this.user
    //   )
    //     .subscribe({
    //       next: (res) => {
    //         if (res.length === 0) {
    //           this.appointmentList = [];
    //           this.skelton = false;
    //           this.noDataAvailable = true;
    //         } else {
    //           this.appointmentList = res;
    //           this.skelton = false;
    //           this.noDataAvailable = false;
    //         }
    //       },
    //       error: (error) => {
    //         this.skelton = true;
    //       },
    //     })
    //     .add(() => {
    //       this.dataLoading = false;
    //     });
    // } else {
    //   console.log('Doctor ID not found');
    // }

    this.route.queryParams.subscribe((params) => {
      const name = params['apt-patientname']
        ? params['apt-patientname']
        : params['apt-doctorname']
        ? params['apt-doctorname']
        : params['patientname']
        ? params['patientname']
        : params['doctorname'];

      const consultancyType = params['consultancyType'];
      const startDate = params['startDate'];
      const endDate = params['endDate'];

      if (consultancyType || name || startDate || endDate) {
        this.loadData({
          consultancy: consultancyType,
          name: name,
          startDate: startDate,
          endDate: endDate,
        });
      } else {
        this.loadData({
          consultancy: undefined,
          name: undefined,
          endDate: undefined,
          startDate: undefined,
        });
      }
    });
  }

  loadData(data: any) {
    console.log(data);

    const { consultancy, startDate, endDate, name } = data;

    let sDate: any =
      startDate !== undefined
        ? new Date(startDate).toLocaleDateString()
        : undefined;
    let eDate: any =
      endDate !== undefined
        ? new Date(endDate).toLocaleDateString()
        : undefined;
    this.doctorFilterDto.consultancyType = consultancy;
    this.doctorFilterDto.fromDate = sDate;
    this.doctorFilterDto.toDate = eDate;
    this.doctorFilterDto.name = name;

    this.filterModel.limit = this.filterModel.pageSize;
    this.filterModel.offset =
      (this.filterModel.pageNo - 1) * this.filterModel.pageSize;
    this.dataLoading = true;
    this.skelton = true;

    if (this.user == 'doctor') {
      this.subs.sink = combineLatest([
        this.AppointmentService.getAppointmentListForDoctorWithSearchFilter(
          this.id,
          this.doctorFilterDto,
          this.filterModel
        ),
        this.AppointmentService.getAppointmentCountForDoctorWithSearchFilter(
          this.id,
          this.doctorFilterDto
        ),
      ]).subscribe(
        ([buildingResponse, countResponse]) => {
          this.totalCount = countResponse;

          this.appointmentList = buildingResponse;
          this.dataLoading = false;
          this.skelton = false;
        },
        (error) => {
          console.log(error);
          this.dataLoading = false;
          this.skelton = false;
        }
      );
      //this.doctorFilterDto = {};
    }

    if (this.user == 'patient') {
      this.subs.sink = combineLatest([
        this.AppointmentService.getAppointmentListForPatientWithSearchFilter(
          this.id,
          'patient',
          this.doctorFilterDto,
          this.filterModel
        ),
        this.AppointmentService.getAppointmentCountForPatientWithSearchFilter(
          this.id,
          'patient',
          this.doctorFilterDto
        ),
      ]).subscribe(
        ([buildingResponse, countResponse]) => {
          this.totalCount = countResponse;
          this.appointmentList = buildingResponse;
          this.dataLoading = false;
          this.skelton = false;
        },
        (error) => {
          console.log(error);
          this.dataLoading = false;
          this.skelton = false;
        }
      );
      //this.doctorFilterDto = {};
    }
    if (this.user == 'agent') {
      this.subs.sink = combineLatest([
        this.AppointmentService.getAppointmentListForPatientWithSearchFilter(
          this.id,
          'agent',
          this.doctorFilterDto,
          this.filterModel
        ),
        this.AppointmentService.getAppointmentCountForPatientWithSearchFilter(
          this.id,
          'agent',
          this.doctorFilterDto
        ),
      ]).subscribe(
        ([buildingResponse, countResponse]) => {
          this.totalCount = countResponse;
          this.appointmentList = buildingResponse;
          this.dataLoading = false;
          this.skelton = false;
        },
        (error) => {
          console.log(error);
          this.dataLoading = false;
          this.skelton = false;
        }
      );
      //this.doctorFilterDto = {};
    }

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.apis.default.url + '/notify')
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", () => {
      //this.getEmployeeData();
    }); 
  }
}
