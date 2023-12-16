import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AgentMasterDto } from '../dto-models/models';
import type { AgentMasterInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class AgentMasterService {
  apiName = 'Default';
  

  create = (input: AgentMasterInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentMasterDto>({
      method: 'POST',
      url: '/api/app/agent-master',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentMasterDto>({
      method: 'GET',
      url: `/api/app/agent-master/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAgentSupervisorsByAgentMasterList = (agentMasterId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentMasterDto[]>({
      method: 'GET',
      url: `/api/app/agent-master/agent-supervisors-by-agent-master-list/${agentMasterId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentMasterDto[]>({
      method: 'GET',
      url: '/api/app/agent-master',
    },
    { apiName: this.apiName,...config });
  

  update = (input: AgentMasterInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AgentMasterDto>({
      method: 'PUT',
      url: '/api/app/agent-master',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
