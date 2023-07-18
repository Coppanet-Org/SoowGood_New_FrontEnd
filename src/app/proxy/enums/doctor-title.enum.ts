import { mapEnumToOptions } from '@abp/ng.core';

export enum DoctorTitle {
  Dr = 1,
  AsstProfDr = 2,
  AssocProfDr = 3,
  ProfDr = 4,
}

export const doctorTitleOptions = mapEnumToOptions(DoctorTitle);
