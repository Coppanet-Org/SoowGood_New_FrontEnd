import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';

export interface DegreeInputDto extends FullAuditedEntityDto<number> {
  degreeName?: string;
  description?: string;
}

export interface DoctorDegreeInputDto extends FullAuditedEntityDto<number> {
  doctorId: number;
  doctorProfile: DoctorProfileInputDto;
  degreeId: number;
  degree: DegreeInputDto;
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
}

export interface DoctorSpecializationInputDto extends FullAuditedEntityDto<number> {
  doctorId: number;
  doctorProfile: DoctorProfileInputDto;
  specialityId?: number;
  speciality: SpecialityInputDto;
  specializationId?: number;
  specialization: SpecializationInputDto;
}

export interface SpecialityInputDto extends FullAuditedEntityDto<number> {
  specialityName?: string;
  description?: string;
  specializations: SpecializationInputDto[];
}

export interface SpecializationInputDto extends FullAuditedEntityDto<number> {
  specialityId?: number;
  speciality: SpecialityInputDto;
  specializationName?: string;
  description?: string;
}
