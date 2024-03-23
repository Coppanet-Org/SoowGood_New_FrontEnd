import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { SendNotificationInputDto } from '../input-dto/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  apiName = 'Default';
  

  sendNotification = (input: SendNotificationInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/notification/send-notification',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
