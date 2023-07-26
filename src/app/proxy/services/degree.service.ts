import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DegreeDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class DegreeService {
  apiName = 'Default';
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DegreeDto>({
      method: 'GET',
      url: `/api/app/degree/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DegreeDto[]>({
      method: 'GET',
      url: '/api/app/degree',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
