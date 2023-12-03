import { FilterInputModel } from './../../utils/models/models';
import { DoctorProfileService, SpecializationService } from 'src/app/proxy/services';
import { SpecialityService } from './../../../proxy/services/speciality.service';

import { DoctorStateService } from './../../services/states/doctors-states/doctor-state.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { AuthService } from '../../services/auth.service';
import {
  DoctorProfileDto,
  SpecialityDto,
  SpecializationDto,
} from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
import { ListItem } from '../../model/common-model';
import { Observable, Subscription, startWith, map } from 'rxjs';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-public-doctors',
  templateUrl: './public-doctors.component.html',
  styleUrls: ['./public-doctors.component.scss'],
})
export class PublicDoctorsComponent implements OnInit {
  doctorList: DoctorProfileDto[] = [];
  dataLoading: boolean = true;
  // filterForm!:FormGroup
  consultancyType!: ListItem[];
  @Input() from!: string;
  specialityList!: any;
  subscriptions: Subscription[] = [];
  specializationList: any;
  filterInput!: FilterInputModel;
  filter!: FormGroup;
  noDataAvailable:boolean = false
  constructor(
    private UserinfoStateService: UserinfoStateService,
    private NormalAuth: AuthService,
    private DoctorStateService: DoctorStateService,
    private fb: FormBuilder,
    private SpecialityService: SpecialityService,
    private SpecializationService: SpecializationService,
    private DoctorProfileService : DoctorProfileService
  ) {
    this.filter = this.fb.group({});
  }


  ngOnInit(): void {
    // this.loadForm();
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
            options: []
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
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getUserPatientInfo(id, 'patient');

      if (this.DoctorStateService.doctorsList.value.length <= 0) {
        const doctorListSubscription =
          this.DoctorStateService.getAllDoctorList().subscribe((res) => {
            this.doctorList = res;
            this.dataLoading = false;
          });

        this.subscriptions.push(doctorListSubscription);
      } else {
        const doctorListSubscription =
          this.DoctorStateService.getDoctorListData().subscribe((res) => {
            this.doctorList = res;
            this.dataLoading = false;
          });

        this.subscriptions.push(doctorListSubscription);
      }
    }
  }

  getSpecializations(id: any) {
    if (!id) {
      return
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


  selectedValueForFilter(data:any){
    console.log(data);
    
     const {
      name,
      consultancy,
      speciality,
      specialization,
      skipValue,
      currentLimit,
    } =data

    this.DoctorProfileService.getDoctorListWithSearchFilter(name,consultancy,speciality,specialization,skipValue,currentLimit).subscribe({
      next:(res:any)=>{
       this.doctorList = res
      },
      error:(err:Error)=>{
        console.log(err);
      }})
    // console.log(this.filterForm.value);
  }
}

