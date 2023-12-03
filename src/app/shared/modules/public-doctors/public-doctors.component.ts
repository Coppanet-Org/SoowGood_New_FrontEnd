import { SpecializationService } from 'src/app/proxy/services';
import { SpecialityService } from './../../../proxy/services/speciality.service';

import { DoctorStateService } from './../../services/states/doctors-states/doctor-state.service';
import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { AuthService } from '../../services/auth.service';
import { DoctorProfileDto, FilterModel, SpecialityDto, SpecializationDto } from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ConsultancyType } from 'src/app/proxy/enums';
import { ListItem } from '../../model/common-model';
import { Subscription, startWith } from 'rxjs';

@Component({
  selector: 'app-public-doctors',
  templateUrl: './public-doctors.component.html',
  styleUrls: ['./public-doctors.component.scss'],
})
export class PublicDoctorsComponent implements OnInit {
  doctorList: DoctorProfileDto[] = [];
  dataLoading: boolean = true
  filterForm!: FormGroup
  consultancyType!: ListItem[]
  @Input() from!: string
  specialityList: SpecialityDto[] = [];
  subscriptions: Subscription[] = [];
  specializationList: any;

  filter: FilterModel = {
    offset: 0,
    limit: 0,
    pageNo: 1,
    pageSize: 10,
    sortBy: 'name',
    sortOrder: 'asc',
    isDesc: false,
  };
  constructor(
    private UserinfoStateService: UserinfoStateService,
    private NormalAuth: AuthService,
    private DoctorStateService: DoctorStateService,
    private fb: FormBuilder,
    private SpecialityService: SpecialityService,
    private SpecializationService: SpecializationService
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.consultancyType = CommonService.getEnumList(ConsultancyType);
    const specialitySubscription = this.SpecialityService.getList().subscribe({
      next: (res) => {
        this.specialityList = res;
      },
      complete: () => {
        specialitySubscription.unsubscribe();
      }
    });

    this.subscriptions.push(specialitySubscription);

    //let id = this.NormalAuth.authInfo().id;
    //if (id) {
    //  this.UserinfoStateService.getUserPatientInfo(id, 'patient');

    //  if (this.DoctorStateService.doctorsList.value.length <= 0) {
    //    const doctorListSubscription = this.DoctorStateService.getAllDoctorList().subscribe(
    //      (res) => {
    //        this.doctorList = res;
    //        this.dataLoading = false;
    //      }
    //    );

    //    this.subscriptions.push(doctorListSubscription);
    //  } else {
    //    const doctorListSubscription = this.DoctorStateService.getDoctorListData().subscribe(
    //      (res) => {
    //        this.doctorList = res;
    //        this.dataLoading = false;
    //      }
    //    );

    //    this.subscriptions.push(doctorListSubscription);
    //  }
    //}

    this.loadDoctorsList();

    const selectedSpeciality$: any = this.filterForm
      .get('specialty')
      ?.valueChanges.pipe(startWith(this.filterForm.get('specialty')?.value));

    selectedSpeciality$.subscribe((data: any) => {
      if (data) {
        this.getSpecializations(data)
      }
    })
  }

  loadDoctorsList() {

    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.UserinfoStateService.getUserPatientInfo(id, 'patient');

      this.filter.limit = this.filter.pageSize;
      this.filter.offset = (this.filter.pageNo - 1) * this.filter.pageSize;

      if (this.DoctorStateService.doctorsList.value.length <= 0) {
        const doctorListSubscription = this.DoctorStateService.getAllDoctorList().subscribe(
          (res) => {
            this.doctorList = res;
            this.dataLoading = false;
          }
        );

        this.subscriptions.push(doctorListSubscription);
      } else {
        const doctorListSubscription = this.DoctorStateService.getDoctorListData().subscribe(
          (res) => {
            this.doctorList = res;
            this.dataLoading = false;
          }
        );

        this.subscriptions.push(doctorListSubscription);
      }
    }

  }

  loadForm() {
    this.filterForm = this.fb.group({
      consultancyType: ['0'],
      specialty: [''],
      specialization: [''],
    });
  }


  getSpecializations(id: any) {
    const specialitySubscription = this.SpecializationService.getListBySpecialtyId(id).subscribe({
      next: (res) => {
        this.specializationList = res;
      },
      complete: () => {
        specialitySubscription.unsubscribe();
      }
    });
  }
  submit() {
    console.log(this.filterForm.value);

  }

  //pageChanged($event: any) {
  //  this.filter.pageNo = $event;
  //  this.loadDoctorsList();
  //}

  //pageSizeChanged($event: any) {
  //  this.filter.pageNo = 1;
  //  this.filter.pageSize = $event;
  //  this.loadDoctorsList();
  //}

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
