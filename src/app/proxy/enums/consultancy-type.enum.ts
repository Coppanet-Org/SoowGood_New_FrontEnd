import { mapEnumToOptions } from '@abp/ng.core';

export enum ConsultancyType {
  Chamber = 1,
  Online = 2,
  PhysicalVisit = 3,
  OnDemand = 4,
}

export const consultancyTypeOptions = mapEnumToOptions(ConsultancyType);

