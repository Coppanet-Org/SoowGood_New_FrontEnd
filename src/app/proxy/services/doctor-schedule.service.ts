import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DoctorScheduleDto, DoctorScheduleInputDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class DoctorScheduleService {
  apiName = 'Default';
  

  create = (input: DoctorScheduleInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDto>({
      method: 'POST',
      url: '/api/app/doctor-schedule',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDto>({
      method: 'GET',
      url: `/api/app/doctor-schedule/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDto[]>({
      method: 'GET',
      url: '/api/app/doctor-schedule',
    },
    { apiName: this.apiName,...config });
  

  update = (input: DoctorScheduleInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDto>({
      method: 'PUT',
      url: '/api/app/doctor-schedule',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
