import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ServiceProviderDto } from '../dto-models/models';
import type { ServiceProviderInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class ServiceProviderService {
  apiName = 'Default';
  

  create = (input: ServiceProviderInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceProviderDto>({
      method: 'POST',
      url: '/api/app/service-provider',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceProviderDto>({
      method: 'GET',
      url: `/api/app/service-provider/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceProviderDto[]>({
      method: 'GET',
      url: '/api/app/service-provider',
    },
    { apiName: this.apiName,...config });
  

  update = (input: ServiceProviderInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceProviderDto>({
      method: 'PUT',
      url: '/api/app/service-provider',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
