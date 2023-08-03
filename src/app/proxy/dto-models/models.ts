import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { AppointmentType } from '../enums/appointment-type.enum';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';
import type { ScheduleType } from '../enums/schedule-type.enum';
import type { ConsultancyType } from '../enums/consultancy-type.enum';
import type { EntityType } from '../enums/entity-type.enum';
import type { AttachmentType } from '../enums/attachment-type.enum';
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

export interface DoctorChamberDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  chamberName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}

export interface DoctorDegreeDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  doctorName?: string;
  degreeId?: number;
  degreeName?: string;
  duration?: number;
  durationType?: string;
  passingYear?: number;
  instituteName?: string;
  instituteCity?: string;
  zipCode?: string;
  instituteCountry?: string;
}

export interface DoctorFeesSetupDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  doctorSchedule?: string;
  appointmentType?: AppointmentType;
  appointmentTypeName?: string;
  currentFee?: number;
  previousFee?: number;
  feeAppliedFrom?: string;
  followUpPeriod?: number;
  reportShowPeriod?: number;
  discount?: number;
  discountAppliedFrom?: string;
  descountPeriod?: number;
  totalFee?: number;
  isActive?: boolean;
}

export interface DoctorFeesSetupInputDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  appointmentType?: AppointmentType;
  currentFee?: number;
  previousFee?: number;
  feeAppliedFrom?: string;
  followUpPeriod?: number;
  reportShowPeriod?: number;
  discount?: number;
  discountAppliedFrom?: string;
  descountPeriod?: number;
  totalFee?: number;
  isActive?: boolean;
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
  profileStep?: number;
  createFrom?: string;
}

export interface DoctorScheduleDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  doctorName?: string;
  scheduleType?: ScheduleType;
  scheduleTypeName?: string;
  consultancyType?: ConsultancyType;
  consultancyTypeName?: string;
  chamberId?: number;
  chamber?: string;
  startTime?: string;
  endTime?: string;
  noOfPatients?: number;
  isActive?: boolean;
  doctorScheduledDayOffs: DoctorScheduledDayOffDto[];
  doctorFeesSetup: DoctorFeesSetupDto[];
}

export interface DoctorScheduleInputDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  scheduleType?: ScheduleType;
  consultancyType?: ConsultancyType;
  chamberId?: number;
  startTime?: string;
  endTime?: string;
  noOfPatients?: number;
  isActive?: boolean;
  doctorScheduledDayOffs: DoctorScheduledDayOffInputDto[];
  doctorFeesSetup: DoctorFeesSetupInputDto[];
}

export interface DoctorScheduledDayOffDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  doctorScheduleName?: string;
  offDay?: string;
  isActive?: boolean;
}

export interface DoctorScheduledDayOffInputDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  offDay?: string;
  isActive?: boolean;
}

export interface DoctorSpecializationDto extends FullAuditedEntityDto<number> {
  doctorId?: number;
  doctorName?: string;
  specialityId?: number;
  specialityName?: string;
  specializationId?: number;
  specializationName?: string;
}

export interface DocumentsAttachmentDto extends FullAuditedEntityDto<number> {
  fileName?: string;
  originalFileName?: string;
  path?: string;
  entityType?: EntityType;
  entityTypeName?: string;
  entityId?: number;
  attachmentType?: AttachmentType;
  attachmentTypeName?: string;
}

export interface LoginDto {
  userName?: string;
  email?: string;
  password?: string;
  rememberMe: boolean;
}

export interface LoginResponseDto {
  userId?: string;
  userName?: string;
  roleName: string[];
  success: boolean;
  message?: string;
}

export interface OtpDto extends FullAuditedEntityDto<number> {
  otpNo?: number;
  mobileNo?: string;
  otpStatus?: OtpStatus;
  maxAttempt?: number;
}

export interface SpecialityDto extends FullAuditedEntityDto<number> {
  specialityName?: string;
  description?: string;
  specializations: SpecializationDto[];
}

export interface SpecializationDto extends FullAuditedEntityDto<number> {
  specialityId?: number;
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
  emailConfirmed?: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  lockoutEnd?: string;
  concurrencyStamp?: string;
}

export interface UserSignUpResultDto {
  userId?: string;
  userName?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
  success?: boolean;
  message: string[];
}
