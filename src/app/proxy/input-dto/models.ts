import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';

export interface DoctorChamberInputDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  chamberName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}

export interface DoctorDegreeInputDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  degreeId?: number;
  duration?: number;
  durationType?: string;
  passingYear?: number;
  instituteName?: string;
  instituteCity?: string;
  zipCode?: string;
  instituteCountry?: string;
}

export interface DoctorProfileInputDto extends FullAuditedEntityDto<number> {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  doctorTitle?: DoctorTitle;
  dateOfBirth?: string;
  gender?: Gender;
  maritalStatus?: MaritalStatus;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  mobileNo?: string;
  email?: string;
  identityNumber?: string;
  bmdcRegNo?: string;
  bmdcRegExpiryDate?: string;
  degrees: DoctorDegreeInputDto[];
  specialityId?: number;
  doctorSpecialization: DoctorSpecializationInputDto[];
  isIdFileUploaded?: boolean;
  isSpecialityFileUploaded?: boolean;
  isActive?: boolean;
  userId?: string;
  isOnline?: boolean;
  [key: string]: any;
  
}

export interface DoctorSpecializationInputDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  specialityId?: number;
  specializationId?: number;
}

export interface FileDeleteInputDto {
  filePath?: string;
}
