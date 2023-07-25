import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { SpecializationDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class SpecializationService {
  apiName = 'Default';
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SpecializationDto>({
      method: 'GET',
      url: `/api/app/specialization/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getBySpecialityId = (specialityId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SpecializationDto>({
      method: 'GET',
      url: `/api/app/specialization/by-speciality-id/${specialityId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SpecializationDto[]>({
      method: 'GET',
      url: '/api/app/specialization',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
