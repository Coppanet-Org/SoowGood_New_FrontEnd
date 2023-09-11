import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PatientProfileDto } from '../dto-models/models';
import type { PatientProfileInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class PatientProfileService {
  apiName = 'Default';
  

  create = (input: PatientProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto>({
      method: 'POST',
      url: '/api/app/patient-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto>({
      method: 'GET',
      url: `/api/app/patient-profile/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserId = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto>({
      method: 'GET',
      url: `/api/app/patient-profile/by-user-id/${userId}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto>({
      method: 'GET',
      url: '/api/app/patient-profile/by-user-name',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto[]>({
      method: 'GET',
      url: '/api/app/patient-profile',
    },
    { apiName: this.apiName,...config });
  

  getPatientListByUserProfileId = (profileId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto[]>({
      method: 'GET',
      url: `/api/app/patient-profile/patient-list-by-user-profile-id/${profileId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: PatientProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PatientProfileDto>({
      method: 'PUT',
      url: '/api/app/patient-profile',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
