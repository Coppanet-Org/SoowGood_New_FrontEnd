import type { FullAuditedEntityDto } from '@abp/ng.core';
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

export interface UserInfoDto {
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

export interface UserRegInfoDto {
  userName?: string;
  name?: string;
  surname?: string;
  email?: string;
  phoneNumber?: string;
  isActive: boolean;
  lockoutEnabled: boolean;
  roleNames: string[];
  password?: string;
}
