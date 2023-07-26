import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DoctorProfileDto } from '../dto-models/models';
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
  

  getByUserId = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto>({
      method: 'GET',
      url: `/api/app/doctor-profile/by-user-id/${userId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorProfileDto[]>({
      method: 'GET',
      url: '/api/app/doctor-profile',
    },
    { apiName: this.apiName,...config });
  

  update = (input: DoctorProfileInputDto, config?: Partial<Rest.Config>) =>
  
    this.restService.request<any, DoctorProfileDto>({
      method: 'PUT',
      url: '/api/app/doctor-profile',
      body: input,
    },
    { apiName: this.apiName,...config })

    

  constructor(private restService: RestService) {}
}
