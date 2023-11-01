import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppointmentDto, AppointmentInputDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiName = 'Default';
  

  create = (input: AppointmentInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto>({
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
  

  getAppointmentListByDoctorId = (doctorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-by-doctor-id/${doctorId}`,
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListByPatientId = (patientId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-by-patient-id/${patientId}`,
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
  

  getPatientListByDoctorId = (doctorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/patient-list-by-doctor-id/${doctorId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: AppointmentInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto>({
      method: 'PUT',
      url: '/api/app/appointment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  testBuildTokenWithUIDBy_appIdAnd_appCertificateAnd_channelNameAnd_uid = (_appId: string, _appCertificate: string, _channelName: string, _uid: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/app/appointment/test-build-token-with-uID/${_appId}`,
      params: { _appCertificate, _channelName, _uid },
    },
    { apiName: this.apiName,...config });
  

  testBuildTokenWithUserAccountBy_appIdAnd_appCertificateAnd_channelNameAnd_account = (_appId: string, _appCertificate: string, _channelName: string, _account: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/app/appointment/test-build-token-with-user-account/${_appId}`,
      params: { _appCertificate, _channelName, _account },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
