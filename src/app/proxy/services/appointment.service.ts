import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppointmentDto, AppointmentInputDto, ResponseDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiName = 'Default';
  

  create = (input: AppointmentInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'POST',
      url: '/api/app/appointment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto>({
      method: 'GET',
      url: `/api/app/appointment/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAppCountByScheduleIdSessionId = (scheduleId: number, sessionId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/appointment/app-count-by-schedule-id-session-id',
      params: { scheduleId, sessionId },
    },
    { apiName: this.apiName,...config });
  

  getLeftBookingCountBySessionIdAndScheduleId = (sessionId: number, scheduleId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/appointment/left-booking-count',
      params: { sessionId, scheduleId },
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: '/api/app/appointment',
    },
    { apiName: this.apiName,...config });
  

  update = (input: AppointmentInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'PUT',
      url: '/api/app/appointment',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
