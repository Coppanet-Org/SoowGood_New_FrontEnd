import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppointmentDto, AppointmentInputDto, DataFilterModel, FilterModel, ResponseDto } from '../dto-models/models';
import type { AppointmentStatus } from '../enums/appointment-status.enum';
import type { ConsultancyType } from '../enums/consultancy-type.enum';
import type { RtcTokenBuilerDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiName = 'Default';
  

  cancellAppointment = (appId: number, cancelByid: number, cancelByRole: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'POST',
      url: `/api/app/appointment/cancell-appointment/${appId}`,
      params: { cancelByid, cancelByRole },
    },
    { apiName: this.apiName,...config });
  

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
  

  getAppCountByRealTimeConsultancy = (aptDate: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/appointment/app-count-by-real-time-consultancy',
      params: { aptDate },
    },
    { apiName: this.apiName,...config });
  

  getAppCountByScheduleIdSessionId = (scheduleId: number, sessionId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/appointment/app-count-by-schedule-id-session-id',
      params: { scheduleId, sessionId },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentCountForDoctorWithSearchFilter = (doctorId: number, dataFilter: DataFilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: `/api/app/appointment/appointment-count-for-doctor-with-search-filter/${doctorId}`,
      params: { name: dataFilter.name, consultancyType: dataFilter.consultancyType, specialityId: dataFilter.specialityId, specializationId: dataFilter.specializationId, appointmentStatus: dataFilter.appointmentStatus, fromDate: dataFilter.fromDate, toDate: dataFilter.toDate, isCurrentOnline: dataFilter.isCurrentOnline },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentCountForPatientWithSearchFilter = (patientId: number, role: string, dataFilter: DataFilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: `/api/app/appointment/appointment-count-for-patient-with-search-filter/${patientId}`,
      params: { role, name: dataFilter.name, consultancyType: dataFilter.consultancyType, specialityId: dataFilter.specialityId, specializationId: dataFilter.specializationId, appointmentStatus: dataFilter.appointmentStatus, fromDate: dataFilter.fromDate, toDate: dataFilter.toDate, isCurrentOnline: dataFilter.isCurrentOnline },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListByDoctorId = (doctorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-by-doctor-id/${doctorId}`,
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListByPatientId = (patientId: number, role: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-by-patient-id/${patientId}`,
      params: { role },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListForDoctorWithSearchFilter = (doctorId: number, dataFilter: DataFilterModel, filterModel: FilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-for-doctor-with-search-filter/${doctorId}`,
      params: { name: dataFilter.name, consultancyType: dataFilter.consultancyType, specialityId: dataFilter.specialityId, specializationId: dataFilter.specializationId, appointmentStatus: dataFilter.appointmentStatus, fromDate: dataFilter.fromDate, toDate: dataFilter.toDate, isCurrentOnline: dataFilter.isCurrentOnline, offset: filterModel.offset, limit: filterModel.limit, pageNo: filterModel.pageNo, pageSize: filterModel.pageSize, sortBy: filterModel.sortBy, sortOrder: filterModel.sortOrder, isDesc: filterModel.isDesc },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListForPatientWithSearchFilter = (patientId: number, role: string, dataFilter: DataFilterModel, filterModel: FilterModel, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-for-patient-with-search-filter/${patientId}`,
      params: { role, name: dataFilter.name, consultancyType: dataFilter.consultancyType, specialityId: dataFilter.specialityId, specializationId: dataFilter.specializationId, appointmentStatus: dataFilter.appointmentStatus, fromDate: dataFilter.fromDate, toDate: dataFilter.toDate, isCurrentOnline: dataFilter.isCurrentOnline, offset: filterModel.offset, limit: filterModel.limit, pageNo: filterModel.pageNo, pageSize: filterModel.pageSize, sortBy: filterModel.sortBy, sortOrder: filterModel.sortOrder, isDesc: filterModel.isDesc },
    },
    { apiName: this.apiName,...config });
  

  getAppointmentListWithSearchFilter = (doctorId: number, name: string, consultancy: ConsultancyType, fromDate: string, toDate: string, aptStatus: AppointmentStatus, skipValue: number, currentLimit: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/appointment-list-with-search-filter/${doctorId}`,
      params: { name, consultancy, fromDate, toDate, aptStatus, skipValue, currentLimit },
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
  

  getListAppointmentListByAdmin = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: '/api/app/appointment/appointment-list-by-admin',
    },
    { apiName: this.apiName,...config });
  

  getPatientListByDoctorId = (doctorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/patient-list-by-doctor-id/${doctorId}`,
    },
    { apiName: this.apiName,...config });
  

  getSearchedPatientListByDoctorId = (doctorId: number, name: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/appointment/searched-patient-list-by-doctor-id/${doctorId}`,
      params: { name },
    },
    { apiName: this.apiName,...config });
  

  update = (input: AppointmentInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto>({
      method: 'PUT',
      url: '/api/app/appointment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateAppointmentPaymentStatus = (appCode: string, trnId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/appointment/appointment-payment-status/${trnId}`,
      params: { appCode },
    },
    { apiName: this.apiName,...config });
  

  updateCallConsultationAppointment = (appCode: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResponseDto>({
      method: 'PUT',
      url: '/api/app/appointment/call-consultation-appointment',
      params: { appCode },
    },
    { apiName: this.apiName,...config });
  

  testAcTokenByInput = (input: RtcTokenBuilerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/app/appointment/test-ac-token',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  testBuildTokenWithUIDByInput = (input: RtcTokenBuilerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/app/appointment/test-build-token-with-uID',
      body: input,
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
