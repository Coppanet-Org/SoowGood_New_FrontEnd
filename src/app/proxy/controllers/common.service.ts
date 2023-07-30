import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FileDeleteInputDto } from '../input-dto/models';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiName = 'Default';
  

  deleteFileAllotmentByInput = (input: FileDeleteInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/Common/DeleteFileAllotment',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteFileComplainByInput = (input: FileDeleteInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/Common/DeleteFileComplain',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  fileUploadComplain = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/api/Common/UploadDocuments',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
