import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CommonDiseaseDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class CommonDiseaseService {
  apiName = 'Default';
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CommonDiseaseDto>({
      method: 'GET',
      url: `/api/app/common-disease/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDrugNameList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CommonDiseaseDto[]>({
      method: 'GET',
      url: '/api/app/common-disease/drug-name-list',
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CommonDiseaseDto[]>({
      method: 'GET',
      url: '/api/app/common-disease',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
