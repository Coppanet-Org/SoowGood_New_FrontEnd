import type { EntityDto, FullAuditedEntityDto } from '@abp/ng.core';
import type { ConsultancyType } from '../enums/consultancy-type.enum';
import type { AppointmentType } from '../enums/appointment-type.enum';
import type { AppointmentStatus } from '../enums/appointment-status.enum';
import type { AppointmentPaymentStatus } from '../enums/appointment-payment-status.enum';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';
import type { ScheduleType } from '../enums/schedule-type.enum';
import type { EntityType } from '../enums/entity-type.enum';
import type { AttachmentType } from '../enums/attachment-type.enum';
import type { OtpStatus } from '../enums/otp-status.enum';

export interface AgentProfileDto extends FullAuditedEntityDto<number> {
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

export interface AppointmentDto extends FullAuditedEntityDto<number> {
  appointmentSerial?: string;
  appointmentCode?: string;
  doctorScheduleId?: number;
  doctorScheduleName?: string;
  doctorProfileId?: number;
  doctorName?: string;
  doctorCode?: string;
  patientProfileId?: number;
  patientName?: string;
  patientCode?: string;
  patientMobileNo?: string;
  patientEmail?: string;
  patientLocation?: string;
  consultancyType?: ConsultancyType;
  consultancyTypeName?: string;
  doctorChamberId?: number;
  doctorChamberName?: string;
  doctorScheduleDaySessionId?: number;
  scheduleDayofWeek?: string;
  appointmentType?: AppointmentType;
  appointmentTypeName?: string;
  appointmentDate?: string;
  appointmentTime?: string;
  doctorFeesSetupId?: number;
  doctorFee?: number;
  agentFee?: number;
  platformFee?: number;
  totalAppointmentFee?: number;
  appointmentStatus?: AppointmentStatus;
  appointmentStatusName?: string;
  appointmentPaymentStatus?: AppointmentPaymentStatus;
  appointmentPaymentStatusName?: string;
  cancelledByEntityId?: number;
  cancelledByRole?: string;
  paymentTransactionId?: string;
  appointmentCreatorId?: number;
  isCousltationComplete?: boolean;
}

export interface AppointmentInputDto extends FullAuditedEntityDto<number> {
  appointmentSerial?: string;
  appointmentCode?: string;
  doctorScheduleId?: number;
  doctorProfileId?: number;
  doctorName?: string;
  doctorCode?: string;
  patientProfileId?: number;
  patientName?: string;
  patientCode?: string;
  consultancyType?: ConsultancyType;
  doctorChamberId?: number;
  doctorScheduleDaySessionId?: number;
  scheduleDayofWeek?: string;
  appointmentType?: AppointmentType;
  appointmentDate?: string;
  appointmentTime?: string;
  doctorFeesSetupId?: number;
  doctorFee?: number;
  agentFee?: number;
  platformFee?: number;
  totalAppointmentFee?: number;
  appointmentStatus?: AppointmentStatus;
  appointmentPaymentStatus?: AppointmentPaymentStatus;
  cancelledByEntityId?: number;
  cancelledByRole?: string;
  paymentTransactionId?: string;
  appointmentCreatorId?: number;
  isCousltationComplete?: boolean;
}

export interface CommonDiseaseDto extends FullAuditedEntityDto<number> {
  code?: string;
  name?: string;
  description?: string;
}

export interface DataFilterModel {
  name?: string;
  consultancyType?: ConsultancyType;
  specialityId?: number;
  specializationId?: number;
  appointmentStatus?: AppointmentStatus;
  fromDate?: string;
  toDate?: string;
  isCurrentOnline?: boolean;
}

export interface DegreeDto extends FullAuditedEntityDto<number> {
  degreeName?: string;
  description?: string;
}

export interface DoctorChamberDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  chamberName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}

export interface DoctorDegreeDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
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
  discountPeriod?: number;
  totalFee?: number;
  isActive?: boolean;
  responseSuccess?: boolean;
  responseMessage?: string;
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
  discountPeriod?: number;
  totalFee?: number;
  isActive?: boolean;
}

export interface DoctorProfileDto extends FullAuditedEntityDto<number> {
  doctorCode?: string;
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
  profileRole?: string;
}

export interface DoctorScheduleDaySessionDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  doctorScheduleName?: string;
  scheduleDayofWeek?: string;
  startTime?: string;
  endTime?: string;
  noOfPatients?: number;
  isActive?: boolean;
}

export interface DoctorScheduleDaySessionInputDto extends FullAuditedEntityDto<number> {
  doctorScheduleId?: number;
  scheduleDayofWeek?: string;
  startTime?: string;
  endTime?: string;
  noOfPatients?: number;
  isActive?: boolean;
}

export interface DoctorScheduleDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  doctorName?: string;
  scheduleType?: ScheduleType;
  scheduleTypeName?: string;
  consultancyType?: ConsultancyType;
  consultancyTypeName?: string;
  doctorChamberId?: number;
  chamber?: string;
  isActive?: boolean;
  status?: string;
  offDayFrom?: string;
  dayTextFrom?: string;
  offDayTo?: string;
  dayTextTo?: string;
  remarks?: string;
  doctorScheduleDaySession: DoctorScheduleDaySessionDto[];
  doctorFeesSetup: DoctorFeesSetupDto[];
  appointments: AppointmentDto[];
  scheduleName?: string;
  responseSuccess?: boolean;
  responseMessage?: string;
}

export interface DoctorScheduleInputDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  scheduleType?: ScheduleType;
  consultancyType?: ConsultancyType;
  doctorChamberId?: number;
  isActive?: boolean;
  offDayFrom?: string;
  offDayTo?: string;
  doctorScheduleDaySession: DoctorScheduleDaySessionInputDto[];
  doctorFeesSetup: DoctorFeesSetupInputDto[];
  scheduleName?: string;
}

export interface DoctorSpecializationDto extends FullAuditedEntityDto<number> {
  doctorProfileId?: number;
  doctorName?: string;
  specialityId?: number;
  specialityName?: string;
  specializationId?: number;
  specializationName?: string;
  documentName?: string;
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
  relatedEntityid?: number;
}

export interface DrugRxDto extends FullAuditedEntityDto<number> {
  tradeName?: string;
  brandName?: string;
  productName?: string;
  genericName?: string;
  dosageForm?: string;
  strength?: string;
  inclusionDate?: string;
  vlidUpto?: string;
  manufacturer?: string;
  dar?: string;
  cdar?: string;
  sdar?: string;
  gdar?: string;
  prescribedDrugName?: string;
}

export interface EkPayInitDto {
  status?: string;
  failedreason?: string;
  gatewayPageURL?: string;
}

export interface FilterModel {
  offset: number;
  limit: number;
  pageNo: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: string;
  isDesc: boolean;
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

export interface PatientProfileDto extends FullAuditedEntityDto<number> {
  fullName?: string;
  isSelf?: boolean;
  patientName?: string;
  patientCode?: string;
  dateOfBirth?: string;
  age?: number;
  gender?: Gender;
  genderName?: string;
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
  profileRole?: string;
}

export interface PaymentHistoryDto extends EntityDto<number> {
  application_code?: string;
  status?: string;
  sessionkey?: string;
  tran_date?: string;
  tran_id?: string;
  val_id?: string;
  amount?: string;
  store_amount?: string;
  currency?: string;
  bank_tran_id?: string;
  card_type?: string;
  card_no?: string;
  card_issuer?: string;
  card_brand?: string;
  card_issuer_country?: string;
  card_issuer_country_code?: string;
  currency_type?: string;
  currency_amount?: string;
  currency_rate?: string;
  base_fair?: string;
  value_a?: string;
  value_b?: string;
  value_c?: string;
  value_d?: string;
  emi_instalment?: string;
  emi_amount?: string;
  emi_description?: string;
  emi_issuer?: string;
  account_details?: string;
  risk_title?: string;
  risk_level?: string;
  apiConnect?: string;
  validated_on?: string;
  gw_version?: string;
  failedreason?: string;
  error?: string;
  card_sub_brand?: string;
  subscription_id?: string;
}

export interface PaymentHistoryInputDto {
  id: number;
  application_code?: string;
  status?: string;
  sessionkey?: string;
  tran_date?: string;
  tran_id?: string;
  val_id?: string;
  amount?: string;
  store_amount?: string;
  currency?: string;
  bank_tran_id?: string;
  card_type?: string;
  card_no?: string;
  card_issuer?: string;
  card_brand?: string;
  card_issuer_country?: string;
  card_issuer_country_code?: string;
  currency_type?: string;
  currency_amount?: string;
  currency_rate?: string;
  base_fair?: string;
  value_a?: string;
  value_b?: string;
  value_c?: string;
  value_d?: string;
  emi_instalment?: string;
  emi_amount?: string;
  emi_description?: string;
  emi_issuer?: string;
  account_details?: string;
  risk_title?: string;
  risk_level?: string;
  apiConnect?: string;
  validated_on?: string;
  gw_version?: string;
  failedreason?: string;
  error?: string;
  card_sub_brand?: string;
  subscription_id?: string;
}

export interface PrescriptionDrugDetailsDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  prescriptionRefferenceCode?: string;
  drugRxId?: number;
  drugName?: string;
  drugDoseSchedule?: string;
  isDrugExceptional?: boolean;
  drugDoseScheduleDays?: string;
  duration?: string;
  instruction?: string;
}

export interface PrescriptionFindingsObservationsDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  prescriptionRefferenceCode?: string;
  observation?: string;
  comments?: string;
}

export interface PrescriptionMainComplaintDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  prescriptionRefferenceCode?: string;
  symptom?: string;
  duration?: string;
  condition?: string;
  problems?: string;
  physicianRecommendedAction?: string;
}

export interface PrescriptionMasterDto extends FullAuditedEntityDto<number> {
  refferenceCode?: string;
  appointmentId?: number;
  appointmentSerial?: string;
  appointmentCode?: string;
  doctorProfileId?: number;
  doctorName?: string;
  doctorCode?: string;
  patientProfileId?: number;
  patientName?: string;
  patientCode?: string;
  patientAge?: number;
  patientBloodGroup?: string;
  patientAdditionalInfo?: string;
  consultancyType?: ConsultancyType;
  consultancyTypeName?: string;
  appointmentType?: AppointmentType;
  appointmentTypeName?: string;
  appointmentDate?: string;
  prescriptionDate?: string;
  patientLifeStyle?: string;
  reportShowDate?: string;
  followupDate?: string;
  advice?: string;
  prescriptionPatientDiseaseHistory: PrescriptionPatientDiseaseHistoryDto[];
  prescriptionMainComplaints: PrescriptionMainComplaintDto[];
  prescriptionFindingsObservations: PrescriptionFindingsObservationsDto[];
  prescriptionMedicalCheckups: PrescriptionMedicalCheckupsDto[];
  prescriptionDrugDetails: PrescriptionDrugDetailsDto[];
}

export interface PrescriptionMedicalCheckupsDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  prescriptionRefferenceCode?: string;
  testName?: string;
  comments?: string;
}

export interface PrescriptionPatientDiseaseHistoryDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  prescriptionRefferenceCode?: string;
  patientProfileId?: number;
  patientName?: string;
  commonDiseaseId?: number;
  diseaseName?: string;
}

export interface ResetPasswordInputDto {
  userId?: string;
  newPassword?: string;
}

export interface ResetPasswordResponseDto {
  userName?: string;
  name?: string;
  success?: boolean;
  message?: string;
}

export interface ResponseDto {
  id?: number;
  value?: string;
  success?: boolean;
  message?: string;
}

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

export interface SslCommerzInitDto {
  status?: string;
  failedreason?: string;
  gatewayPageURL?: string;
}

export interface TransactionValidationDto {
  message?: string;
  isValidTransaction?: boolean;
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
