import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DoctorTitle } from '../enums/doctor-title.enum';
import type { Gender } from '../enums/gender.enum';
import type { MaritalStatus } from '../enums/marital-status.enum';
import type { ConsultancyType } from '../enums/consultancy-type.enum';
import type { AppointmentType } from '../enums/appointment-type.enum';

export interface AgentMasterInputDto extends FullAuditedEntityDto<number> {
  agentMasterOrgName?: string;
  agentMasterCode?: string;
  contactPerson?: string;
  contactPersonOfficeId?: string;
  contactPersonIdentityNumber?: string;
  contactPersongMobileNo?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phoneNo?: string;
  email?: string;
  emergencyContact?: string;
  agentMasterDocNumber?: string;
  agentMasterDocExpireDate?: string;
  isActive?: boolean;
  userId?: string;
}

export interface AgentProfileInputDto extends FullAuditedEntityDto<number> {
  agentMasterId?: number;
  agentSupervisorId?: number;
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
  agentDocNumber?: string;
  agentDocExpireDate?: string;
}

export interface AgentSupervisorInputDto extends FullAuditedEntityDto<number> {
  agentMasterId?: number;
  agentSupervisorOrgName?: string;
  agentSupervisorCode?: string;
  supervisorName?: string;
  supervisorIdentityNumber?: string;
  supervisorMobileNo?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phoneNo?: string;
  email?: string;
  emergencyContact?: string;
  agentSupervisorDocNumber?: string;
  agentSupervisorDocExpireDate?: string;
  isActive?: boolean;
  userId?: string;
}

export interface DegreeInputDto extends FullAuditedEntityDto<number> {
  degreeName?: string;
  description?: string;
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
  serviceDetails?: string;
  documentName?: string;
}

export interface EkPayInputDto {
  applicationCode?: string;
  transactionId?: string;
  totalAmount?: string;
}

export interface FileDeleteInputDto {
  filePath?: string;
}

export interface FinancialSetupInputDto extends FullAuditedEntityDto<number> {
  platformFacilityId?: number;
  amountIn?: string;
  amount?: number;
  externalAmountIn?: string;
  externalAmount?: number;
  providerAmount?: number;
  isActivie?: boolean;
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
  creatorCode?: string;
  creatorRole?: string;
  creatorEntityId?: number;
  userId?: string;
}

export interface PaymentHistoryMobileInputDto {
  applicationCode?: string;
  transactionId?: string;
  totalAmount?: string;
  sessionKey?: string;
  status?: string;
  failedReason?: string;
}

export interface PlatformFacilityInputDto extends FullAuditedEntityDto<number> {
  serviceName?: string;
  description?: string;
}

export interface PrescriptionDrugDetailsInputDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  drugRxId?: number;
  drugName?: string;
  drugDoseSchedule?: string;
  isDrugExceptional?: boolean;
  drugDoseScheduleDays?: string;
  duration?: string;
  instruction?: string;
}

export interface PrescriptionFindingsObservationsInputDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  observation?: string;
  comments?: string;
}

export interface PrescriptionMainComplaintInputDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  symptom?: string;
  duration?: string;
  condition?: string;
  problems?: string;
  physicianRecommendedAction?: string;
}

export interface PrescriptionMasterInputDto extends FullAuditedEntityDto<number> {
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
  patientAdditionalInfo?: string;
  consultancyType?: ConsultancyType;
  appointmentType?: AppointmentType;
  appointmentDate?: string;
  prescriptionDate?: string;
  patientLifeStyle?: string;
  reportShowDate?: string;
  followupDate?: string;
  advice?: string;
  prescriptionPatientDiseaseHistory: PrescriptionPatientDiseaseHistoryInputDto[];
  prescriptionMainComplaints: PrescriptionMainComplaintInputDto[];
  prescriptionFindingsObservations: PrescriptionFindingsObservationsInputDto[];
  prescriptionMedicalCheckups: PrescriptionMedicalCheckupsInputDto[];
  prescriptionDrugDetails: PrescriptionDrugDetailsInputDto[];
}

export interface PrescriptionMedicalCheckupsInputDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  testName?: string;
  comments?: string;
}

export interface PrescriptionPatientDiseaseHistoryInputDto extends FullAuditedEntityDto<number> {
  prescriptionMasterId?: number;
  patientProfileId?: number;
  commonDiseaseId?: number;
  diseaseName?: string;
}

export interface RtcTokenBuilerDto {
  appid?: string;
  appCertificate?: string;
  chanelName?: string;
  uid: number;
}

export interface SpecialityInputDto extends FullAuditedEntityDto<number> {
  specialityName?: string;
  description?: string;
  specializations: SpecializationInputDto[];
}

export interface SpecializationInputDto extends FullAuditedEntityDto<number> {
  specialityId?: number;
  specializationName?: string;
  description?: string;
}

export interface SslCommerzInputDto {
  applicationCode?: string;
  transactionId?: string;
  totalAmount?: string;
}
