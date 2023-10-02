import { mapEnumToOptions } from '@abp/ng.core';

export enum AppointmentPaymentStatus {
  Paid = 1,
  Due = 2,
}

export const appointmentPaymentStatusOptions = mapEnumToOptions(AppointmentPaymentStatus);
