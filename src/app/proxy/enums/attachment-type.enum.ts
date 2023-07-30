import { mapEnumToOptions } from '@abp/ng.core';

export enum AttachmentType {
  ProfilePicture = 1,
  DoctorDegreeDoc = 2,
  DoctIdentityDoc = 3,
  DoctorSpecialityDoc = 4,
  Prescription = 5,
  PatientLabreport = 6,
}

export const attachmentTypeOptions = mapEnumToOptions(AttachmentType);
