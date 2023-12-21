import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppointmentDto, DashboardDto } from '../dto-models/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiName = 'Default';
  

  getDashboadDataForDoctor = (doctorid: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DashboardDto>({
      method: 'GET',
      url: '/api/app/dashboard/dashboad-data-for-doctor',
      params: { doctorid },
    },
    { apiName: this.apiName,...config });
  

  getDashboadDataForPatient = (patientId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DashboardDto>({
      method: 'GET',
      url: `/api/app/dashboard/dashboad-data-for-patient/${patientId}`,
    },
    { apiName: this.apiName,...config });
  

  getDashboardAppointmentListForDoctor = (doctorId: number, day: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/dashboard/dashboard-appointment-list-for-doctor/${doctorId}`,
      params: { day },
    },
    { apiName: this.apiName,...config });
  

  getDashboardAppointmentListForPatient = (patientId: number, day: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppointmentDto[]>({
      method: 'GET',
      url: `/api/app/dashboard/dashboard-appointment-list-for-patient/${patientId}`,
      params: { day },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
