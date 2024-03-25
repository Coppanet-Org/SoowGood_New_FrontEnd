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
  consultancyType: ListItem[] = CommonService.getEnumList(ConsultancyType);
  @Input() from!: string;
  subscriptions: Subscription[] = [];
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
    private fb: FormBuilder,
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
          {
            label: 'Consultancy Type',
            fieldType: 'select',
            formControlName: 'consultancy',
            options: CommonService.getEnumList(ConsultancyType),
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

    const specialitySubscription =
      this.SpecializationService.getList().subscribe({
        next: (res) => {
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
                  options: this.consultancyType,
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

    this.subscriptions.push(specialitySubscription);

    this.route.queryParams.subscribe((params) => {
      const name = params['doctorname']
        ? params['doctorname']
        : params['patientname']
          ? params['patientname']
          : undefined;
      const consultancyType = params['consultancyType'];
      const specialization = params['specialization'];
      console.log(specialization);

      if (consultancyType || name || specialization) {
        this.selectedFilterData({
          consultancy: consultancyType,
          name: name,
          specialization: specialization,
        });
      } else {
        this.selectedFilterData({
          consultancy: '',
          name: '',
          specialization: '',
        });
      }
    });
  }

  selectedFilterData(data: any) {
    this.dataLoading = true;
    // this.noDataAvailable = true;
    const { consultancy, specialization, name } = data;

    this.doctorFilterDto.consultancyType = consultancy;
    this.doctorFilterDto.name = name;
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
