import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AgentProfileDto } from '../dto-models/models';
import type { AgentProfileInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class AgentProfileService {
  apiName = 'Default';
  

  create = (input: AgentProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto>({
      method: 'POST',
      url: '/api/app/agent-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto>({
      method: 'GET',
      url: `/api/app/agent-profile/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserId = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto>({
      method: 'GET',
      url: `/api/app/agent-profile/by-user-id/${userId}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto>({
      method: 'GET',
      url: '/api/app/agent-profile/by-user-name',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto[]>({
      method: 'GET',
      url: '/api/app/agent-profile',
    },
    { apiName: this.apiName,...config });
  

  update = (input: AgentProfileInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentProfileDto>({
      method: 'PUT',
      url: '/api/app/agent-profile',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
