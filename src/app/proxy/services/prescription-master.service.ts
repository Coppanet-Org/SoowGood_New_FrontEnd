import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PrescriptionMasterDto } from '../dto-models/models';
import type { PrescriptionMasterInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionMasterService {
  apiName = 'Default';
  

  create = (input: PrescriptionMasterInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrescriptionMasterDto>({
      method: 'POST',
      url: '/api/app/prescription-master',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrescriptionMasterDto>({
      method: 'GET',
      url: `/api/app/prescription-master/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrescriptionMasterDto[]>({
      method: 'GET',
      url: '/api/app/prescription-master',
    },
    { apiName: this.apiName,...config });
  

  getPrescriptionMasterListByDoctorId = (doctorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrescriptionMasterDto[]>({
      method: 'GET',
      url: `/api/app/prescription-master/prescription-master-list-by-doctor-id/${doctorId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: PrescriptionMasterInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrescriptionMasterDto>({
      method: 'PUT',
      url: '/api/app/prescription-master',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
