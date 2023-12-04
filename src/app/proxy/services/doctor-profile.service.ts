import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DataFilterModel, DoctorProfileDto, FilterModel } from '../dto-models/models';
import type { ConsultancyType } from '../enums/consultancy-type.enum';
import type { DoctorProfileInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class DoctorProfileService {
  apiName = 'Default';
  

  create = (input: DoctorProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'POST',
      url: '/api/app/doctor-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'GET',
      url: `/api/app/doctor-profile/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAllDoctorsSearchList = (name: string, consultType: number, speciality: number, specialization: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctors-search-list',
      params: { name, consultType, speciality, specialization },
    },
    { apiName: this.apiName,...config });
  

  getByUserId = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'GET',
      url: `/api/app/doctor-profile/by-user-id/${userId}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'GET',
      url: '/api/app/doctor-profile/by-user-name',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  getDoctorDetailsByAdmin = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'GET',
      url: `/api/app/doctor-profile/${id}/doctor-details-by-admin`,
    },
    { apiName: this.apiName,...config });
  

  getDoctorListFilter = (doctorFilterModel: DataFilterModel, filterModel: FilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctor-list-filter',
      params: { name: doctorFilterModel.name, consultancyType: doctorFilterModel.consultancyType, specialityId: doctorFilterModel.specialityId, specializationId: doctorFilterModel.specializationId, offset: filterModel.offset, limit: filterModel.limit, pageNo: filterModel.pageNo, pageSize: filterModel.pageSize, sortBy: filterModel.sortBy, sortOrder: filterModel.sortOrder, isDesc: filterModel.isDesc },
    },
    { apiName: this.apiName,...config });
  

  getDoctorListSearchByName = (name: string, filterModel: FilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctor-list-search-by-name',
      params: { name, offset: filterModel.offset, limit: filterModel.limit, pageNo: filterModel.pageNo, pageSize: filterModel.pageSize, sortBy: filterModel.sortBy, sortOrder: filterModel.sortOrder, isDesc: filterModel.isDesc },
    },
    { apiName: this.apiName,...config });
  

  getDoctorListWithSearchFilter = (name: string, consultancy: ConsultancyType, speciality: number, specialization: number, skipValue: number, currentLimit: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctor-list-with-search-filter',
      params: { name, consultancy, speciality, specialization, skipValue, currentLimit },
    },
    { apiName: this.apiName,...config });
  

  getDoctorsCountByName = (name: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctors-count-by-name',
      params: { name },
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile',
    },
    { apiName: this.apiName,...config });
  

  getListDoctorListByAdmin = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile/doctor-list-by-admin',
    },
    { apiName: this.apiName,...config });
  

  update = (input: DoctorProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'PUT',
      url: '/api/app/doctor-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateActiveStatusByAdminByIdAndActiveStatus = (Id: number, activeStatus: boolean, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'PUT',
      url: `/api/app/doctor-profile/active-status-by-admin/${Id}`,
      params: { activeStatus },
    },
    { apiName: this.apiName,...config });
  

  updateProfileStep = (profileId: number, step: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'PUT',
      url: `/api/app/doctor-profile/profile-step/${profileId}`,
      params: { step },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
