import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';

export interface AgentProfileInputDto extends FullAuditedEntityDto<number> {
  fullName?: string;
  agentCode?: string;
  organizationName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  mobileNo?: string;
  email?: string;
  isActive?: boolean;
  userId?: string;
  profileStep?: number;
  createFrom?: string;
}

export interface DoctorChamberInputDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  chamberName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}

export interface DoctorDegreeInputDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
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
  doctorCode?: string;
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
  profileStep?: number;
  createFrom?: string;
}

export interface DoctorSpecializationInputDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  specialityId?: number;
  specializationId?: number;
  documentName?: string;
}

export interface FileDeleteInputDto {
  filePath?: string;
}

export interface PatientProfileInputDto extends FullAuditedEntityDto<number> {
  fullName?: string;
  isSelf?: boolean;
  patientName?: string;
  patientCode?: string;
  dateOfBirth?: string;
  age?: number;
  gender?: Gender;
  bloodGroup?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  mobileNo?: string;
  patientMobileNo?: string;
  email?: string;
  patientEmail?: string;
  createdBy?: string;
  cratorCode?: string;
  creatorEntityId?: number;
  userId?: string;
}

export interface SslCommerzInputDto {
  applicationCode?: string;
  transactionId?: string;
  totalAmount?: string;
}
