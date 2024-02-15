import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AgentSupervisorDto } from '../dto-models/models';
import type { AgentSupervisorInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class AgentSupervisorService {
  apiName = 'Default';
  

  create = (input: AgentSupervisorInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto>({
      method: 'POST',
      url: '/api/app/agent-supervisor',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto>({
      method: 'GET',
      url: `/api/app/agent-supervisor/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAgentSupervisorsByAgentMasterList = (agentMasterId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto[]>({
      method: 'GET',
      url: `/api/app/agent-supervisor/agent-supervisors-by-agent-master-list/${agentMasterId}`,
    },
    { apiName: this.apiName,...config });
  

  getByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto>({
      method: 'GET',
      url: '/api/app/agent-supervisor/by-user-name',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto[]>({
      method: 'GET',
      url: '/api/app/agent-supervisor',
    },
    { apiName: this.apiName,...config });
  

  getListByMasterId = (masterId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto[]>({
      method: 'GET',
      url: `/api/app/agent-supervisor/by-master-id/${masterId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: AgentSupervisorInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentSupervisorDto>({
      method: 'PUT',
      url: '/api/app/agent-supervisor',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
