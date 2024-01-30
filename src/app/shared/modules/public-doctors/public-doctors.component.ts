import { FilterInputModel } from './../../utils/models/models';
import {
  DoctorProfileService,
  SpecializationService,
} from 'src/app/proxy/services';
import { SpecialityService } from './../../../proxy/services/speciality.service';
import { DoctorStateService } from './../../services/states/doctors-states/doctor-state.service';
import { Component, Input, OnInit } from '@angular/core';

import {
  DataFilterModel,
  DoctorProfileDto,
  FilterModel,
} from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
import { ListItem } from '../../model/common-model';
import { Subscription, combineLatest } from 'rxjs';
import { SubSink } from 'subsink';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-public-doctors',
  templateUrl: './public-doctors.component.html',
  styleUrls: ['./public-doctors.component.scss'],
})
export class PublicDoctorsComponent implements OnInit {
  totalCount: any = 0;

  doctorList: DoctorProfileDto[] = [];
  dataLoading: boolean = true;
  //filterForm!:FormGroup
  consultancyType!: ListItem[];
  @Input() from!: string;
  specialityList!: any;
  subscriptions: Subscription[] = [];
  specializationList: any;
  filterInput!: FilterInputModel;
  filter!: FormGroup;
  noDataAvailable: boolean = false;
  subs = new SubSink();
  doctorFilterDto: DataFilterModel = {} as DataFilterModel;

  filterModel: FilterModel = {
    offset: 0,
    limit: 0,
    pageNo: 0,
    pageSize: 10,
    sortBy: 'name',
    sortOrder: 'asc',
    isDesc: false,
  };
  constructor(
    private DoctorStateService: DoctorStateService,
    private fb: FormBuilder,
    private SpecialityService: SpecialityService,
    private SpecializationService: SpecializationService,
    private DoctorProfileService: DoctorProfileService,
    private route: ActivatedRoute
  ) {
    this.filter = this.fb.group({});
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.filterInput = {
      fields: {
        searchField: {
          formControlName: 'search',
        },
        filterField: [
          //{
          //  label: '',
          //  fieldType: 'input',
          //  formControlName: 'name',
          //  options: [],
          //},
          {
            label: 'Consultancy Type',
            fieldType: 'select',
            formControlName: 'consultancy',
            options: CommonService.getEnumList(ConsultancyType),
          },
          {
            label: 'Specialty',
            fieldType: 'select',
            formControlName: 'speciality',
            options: [],
          },
          {
            label: 'Specialization',
            fieldType: 'select',
            formControlName: 'specialization',
            options: [],
          },
        ],
      },
    };

    //this.loadForm();
    const specialitySubscription = this.SpecialityService.getList().subscribe({
      next: (res: any) => {
        this.specialityList = res;

        this.filterInput = {
          fields: {
            searchField: {
              formControlName: 'search',
            },
            filterField: [
              {
                label: 'Consultancy Type',
                fieldType: 'select',
                formControlName: 'consultancy',
                options: CommonService.getEnumList(ConsultancyType),
              },
              {
                label: 'Specialty',
                fieldType: 'select',
                formControlName: 'speciality',
                options: res.map((l: any) => {
                  return { id: l.id, name: l.specialityName };
                }),
              },
              {
                label: 'Specialization',
                fieldType: 'select',
                formControlName: 'specialization',
                options: [],
              },
            ],
          },
        };
      },
      complete: () => {
        specialitySubscription.unsubscribe();
      },
    });

    this.subscriptions.push(specialitySubscription);

    this.route.queryParams.subscribe((params) => {
      const doctorName = params['doctorname'];
      this.searchData(doctorName);
      if (!params) {
        this.getDoctors();
      }
    });
  }

  getSpecializations(id: any) {
    if (!id) {
      return;
    }
    const specialitySubscription =
      this.SpecializationService.getListBySpecialtyId(id).subscribe({
        next: (res) => {
          this.specializationList = res;
          this.filterInput = {
            fields: {
              searchField: {
                formControlName: 'search',
              },
              filterField: [
                {
                  label: 'Consultancy Type',
                  fieldType: 'select',
                  formControlName: 'consultancy',
                  options: CommonService.getEnumList(ConsultancyType),
                },
                {
                  label: 'Specialty',
                  fieldType: 'select',
                  formControlName: 'speciality',
                  options: this.specialityList.map((l: any) => {
                    return { id: l.id, name: l.specialityName };
                  }),
                },
                {
                  label: 'Specialization',
                  fieldType: 'select',
                  formControlName: 'specialization',
                  options: res.map((l: any) => {
                    return { id: l.id, name: l.specializationName };
                  }),
                },
              ],
            },
          };
        },
        complete: () => {
          specialitySubscription.unsubscribe();
        },
      });
  }

  getDoctors() {
    if (this.DoctorStateService.doctorsList.value.length <= 0) {
      const doctorListSubscription =
        this.DoctorStateService.getAllDoctorList().subscribe((res) => {
          this.doctorList = res;
          this.dataLoading = false;
          this.noDataAvailable = true;
        });

      this.subscriptions.push(doctorListSubscription);
    } else {
      const doctorListSubscription =
        this.DoctorStateService.getDoctorListData().subscribe((res) => {
          this.doctorList = res;

          this.dataLoading = false;
          this.noDataAvailable = false;
        });
      this.subscriptions.push(doctorListSubscription);
    }
  }

  selectedFilterData(data: any) {
    this.dataLoading = true;
    // this.noDataAvailable = true;
    const { consultancy, speciality, specialization } = data;

    this.doctorFilterDto.consultancyType = consultancy;
    this.doctorFilterDto.specialityId = speciality;
    this.doctorFilterDto.specializationId = specialization;

    this.filterModel.limit = this.filterModel.pageSize;
    this.filterModel.offset =
      (this.filterModel.pageNo - 1) * this.filterModel.pageSize;

    this.subs.sink = combineLatest([
      this.DoctorProfileService.getDoctorListFilter(
        this.doctorFilterDto,
        this.filterModel
      ),
      this.DoctorProfileService.getDoctorsCountByFilters(this.doctorFilterDto),
    ]).subscribe(
      ([buildingResponse, countResponse]) => {
        this.totalCount = countResponse;
        this.dataLoading = false;

        this.doctorList = buildingResponse;
      },
      (error) => {
        console.log(error);
      }
    );
    //this.doctorFilterDto = {};
  }

  searchData(data: any) {
    this.dataLoading = true;
    this.doctorFilterDto.name = data;

    this.filterModel.limit = this.filterModel.pageSize;
    this.filterModel.offset =
      (this.filterModel.pageNo - 1) * this.filterModel.pageSize;

    this.subs.sink = combineLatest([
      this.DoctorProfileService.getDoctorListFilter(
        this.doctorFilterDto,
        this.filterModel
      ),
      this.DoctorProfileService.getDoctorsCountByFilters(this.doctorFilterDto),
    ]).subscribe(
      ([buildingResponse, countResponse]) => {
        this.totalCount = countResponse;

        // this.noDataAvailable = false;
        if (countResponse < 1) {
          this.noDataAvailable = true;
          this.dataLoading = false;
          this.doctorList = buildingResponse;
        } else {
          this.noDataAvailable = false;
          this.doctorList = buildingResponse;
          this.dataLoading = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
    //this.doctorFilterDto = {};
  }

  pageChanged(e: any) {
    this.filterModel.pageNo = e;
    //this.doctorList;
    //this.loadData();
  }

  pageSizeChanged($event: any) {
    this.filterModel.pageNo = 1;
    this.filterModel.pageSize = $event;
    this.doctorList;
    //this.loadData();
  }
}
