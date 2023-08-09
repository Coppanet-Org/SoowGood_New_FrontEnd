import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DoctorScheduleDaySessionDto, DoctorScheduleDaySessionInputDto, ResponseDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class DoctorScheduleDaySessionService {
  apiName = 'Default';
  

  create = (input: DoctorScheduleDaySessionInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'POST',
      url: '/api/app/doctor-schedule-day-session',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDaySessionDto>({
      method: 'GET',
      url: `/api/app/doctor-schedule-day-session/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DoctorScheduleDaySessionDto[]>({
      method: 'GET',
      url: '/api/app/doctor-schedule-day-session',
    },
    { apiName: this.apiName,...config });
  

  update = (input: DoctorScheduleDaySessionInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'PUT',
      url: '/api/app/doctor-schedule-day-session',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
