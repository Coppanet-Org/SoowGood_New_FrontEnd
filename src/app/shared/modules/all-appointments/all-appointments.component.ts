import { Component, Input, OnInit } from '@angular/core';
import { DoctorPatientAppointmentService } from '../../services/states/appointment-states/doctor-patient-appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterInputModel } from '../../utils/models/models';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
import { DataFilterModel, FilterModel } from 'src/app/proxy/dto-models';
import { SubSink } from 'subsink';
import { DoctorProfileService, AppointmentService } from 'src/app/proxy/services';
import { combineLatest } from 'rxjs';
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

  totalCount: any = 0;

  filter!: FormGroup;
  filterInput!: FilterInputModel
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
  constructor(
    private DoctorPatientAppointmentService: DoctorPatientAppointmentService,
    private fb: FormBuilder,
    private AppointmentService: AppointmentService
  ) {
    this.filterInput = {
      fields: {
        searchField: {
          formControlName: 'search',
        },
        filterField: [
          {
            label: 'Consultancy Type',
            fieldType: 'select',
            formControlName: 'consultancyType',
            options: CommonService.getEnumList(ConsultancyType)
          },
          {
            label: 'start date',
            fieldType: 'date-range',
            formControlName: {
              startDate: 'startDate',
              endDate: 'endDate',
            }
          }

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

  loadData(data: any) {
    console.log(data);

    const { consultancyType, startDate, endDate } = data;
    let sDate: any = new Date(startDate).toLocaleDateString()
    let eDate: any = new Date(endDate).toLocaleDateString()
    this.doctorFilterDto.consultancyType = consultancyType;
    this.doctorFilterDto.fromDate = sDate;
    this.doctorFilterDto.toDate = eDate;

    this.filterModel.limit = this.filterModel.pageSize;
    this.filterModel.offset = (this.filterModel.pageNo - 1) * this.filterModel.pageSize;


    this.subs.sink = combineLatest([
      this.AppointmentService.getAppointmentListForDoctorWithSearchFilter(this.id, this.doctorFilterDto, this.filterModel),
      this.AppointmentService.getAppointmentCountForDoctorWithSearchFilter(this.id, this.doctorFilterDto)
    ]).subscribe(
      ([buildingResponse, countResponse]) => {
        this.totalCount = countResponse;
        this.appointmentList = buildingResponse;
      },
      (error) => {
        console.log(error);
      });
    //this.doctorFilterDto = {};
  }

  getSpecializations(e: any) {

  }
  searchData(e: any) {

  }
  searchChanged(e: string) {
    console.log(e);
  }
}
