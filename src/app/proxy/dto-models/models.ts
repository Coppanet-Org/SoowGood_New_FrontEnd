import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';
import type { OtpStatus } from '../enums/otp-status.enum';

export interface SmsInfo {
  sms_status?: string;
  status_message?: string;
  sms_type?: string;
  msisdn?: string;
  sms_body?: string;
  csms_id?: string;
  reference_id?: string;
}

export interface SmsRequestParamDto {
  msisdn?: string;
  sms?: string;
  csmsId?: string;
}

export interface SmsResponseDto {
  status?: string;
  status_code?: string;
  error_message?: string;
  smsinfo: SmsInfo[];
}

export interface DegreeDto extends FullAuditedEntityDto<number> {
  degreeName?: string;
  description?: string;
}

export interface DoctorDegreeDto extends FullAuditedEntityDto<number> {
  doctorId: number;
  doctorProfile: DoctorProfileDto;
  doctorName?: string;
  degreeId: number;
  degree: DegreeDto;
  degreeName?: string;
  instituteName?: string;
  instituteCity?: string;
  zipCode?: string;
  instituteCountry?: string;
}

export interface DoctorProfileDto extends FullAuditedEntityDto<number> {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  doctorTitle?: DoctorTitle;
  doctorTitleName?: string;
  dateOfBirth?: string;
  gender?: Gender;
  genderName?: string;
  maritalStatus?: MaritalStatus;
  maritalStatusName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  mobileNo?: string;
  email?: string;
  identityNumber?: string;
  bmdcRegNo?: string;
  bmdcRegExpiryDate?: string;
  degrees: DoctorDegreeDto[];
  specialityId?: number;
  specialityName?: string;
  doctorSpecialization: DoctorSpecializationDto[];
  isIdFileUploaded?: boolean;
  isSpecialityFileUploaded?: boolean;
  isActive?: boolean;
  userId?: string;
  isOnline?: boolean;
}

export interface DoctorSpecializationDto extends FullAuditedEntityDto<number> {
  doctorId: number;
  doctorProfile: DoctorProfileDto;
  doctorName?: string;
  specialityId?: number;
  speciality: SpecialityDto;
  specialityName?: string;
  specializationId?: number;
  specialization: SpecializationDto;
  specializationName?: string;
}

export interface LoginDto {
  userName?: string;
  email?: string;
  password?: string;
  rememberMe: boolean;
}

export interface OtpDto extends FullAuditedEntityDto<number> {
  otpNo: number;
  mobileNo?: string;
  otpStatus: OtpStatus;
  maxAttempt?: number;
}

export interface SpecialityDto extends FullAuditedEntityDto<number> {
  specialityName?: string;
  description?: string;
  specializations: SpecializationDto[];
}

export interface SpecializationDto extends FullAuditedEntityDto<number> {
  specialityId?: number;
  speciality: SpecialityDto;
  specialityName?: string;
  specializationName?: string;
  description?: string;
}

export interface UserInfoDto extends FullAuditedEntityDto<string> {
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
  email?: string;
  emailConfirmed: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  isActive: boolean;
  lockoutEnabled: boolean;
  lockoutEnd?: string;
  concurrencyStamp?: string;
}

export interface UserSignUpResultDto {
  userId?: string;
  userName?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  isActive: boolean;
  success?: boolean;
  message?: string;
}
