import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { SpecialityDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  apiName = 'Default';
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SpecialityDto>({
      method: 'GET',
      url: `/api/app/speciality/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SpecialityDto[]>({
      method: 'GET',
      url: '/api/app/speciality',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
