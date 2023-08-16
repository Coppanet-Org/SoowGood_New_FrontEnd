import { DoctorTitle, Gender, MaritalStatus } from 'src/app/proxy/enums';
import { CommonService } from '../services/common.service';

const genderList = CommonService.getEnumList(Gender);
const maritalOptions = CommonService.getEnumList(MaritalStatus);
const titleList = CommonService.getEnumList(DoctorTitle);

export const inputConfigs = [
  {
    label: 'Your Title',
    inputId: 'doctorTitle',
    defaultOption: 'Select Title',
    options: titleList,
    formControlName: 'doctorTitle',
    isSelect: true,
    type: 'select',
  },
  {
    label: 'Full Name',
    inputId: 'fullName',
    formControlName: 'fullName',
    isSelect: false,
    type: 'text',
  },
  {
    label: 'Email',
    inputId: 'email',
    formControlName: 'email',
    isSelect: false,
    readonly: true,
    type: 'email',
  },
  {
    label: 'Gender',
    inputId: 'gender',
    formControlName: 'gender',
    options: genderList,
    isSelect: true,
    type: 'select',
  },
  {
    label: 'Martial Status',
    inputId: 'maritalStatus',
    formControlName: 'maritalStatus',
    options: maritalOptions,
    isSelect: true,
    type: 'select',
  },
  {
    label: 'Date of Birth',
    inputId: 'dateOfBirth',
    formControlName: 'dateOfBirth',
    isSelect: false,
    type: 'date',
  },
  {
    label: 'Identity Number',
    inputId: 'identityNumber',
    formControlName: 'identityNumber',
    isSelect: false,
    type: 'number',
  },
  {
    label: 'BMDC Reg Number',
    inputId: 'bmdcRegNo',
    formControlName: 'bmdcRegNo',
    isSelect: false,
    type: 'number',
  },
  {
    label: 'BMDC Exp. Date',
    inputId: 'bmdcRegExpiryDate',
    formControlName: 'bmdcRegExpiryDate',
    isSelect: false,
    type: 'date',
  },
  {
    label: 'Address',
    inputId: 'address',
    formControlName: 'address',
    isSelect: false,
    type: 'text',
  },
  {
    label: 'Country',
    inputId: 'country',
    formControlName: 'country',
    isSelect: false,
  },
  {
    label: 'City',
    inputId: 'city',
    formControlName: 'city',
    isSelect: false,
    type: 'text',
  },
  {
    label: 'Zip Code',
    inputId: 'zipCode',
    formControlName: 'zipCode',
    isSelect: false,
    type: 'number',
  },
  {
    label: 'Specialties',
    inputId: 'specialityId',
    formControlName: 'specialityId',
    //   options: this.specialties,
    isSelect: false,
    type: 'select',
  },
  // ... add more input configurations for other fields
];

export const scheduleData = (consType: any, shedType: any, hospital: any) => {
  console.log(consType,shedType, hospital);

  return [
    {
      label: 'Select Consultancy Type',
      inputId: 'consultancyType',
      defaultOption: 'Select Consultancy Type',
      options: consType,
      formControlName: 'consultancyType',
      isSelect: true,
    },
    {
      label: 'Select appointment type',
      inputId: 'scheduleType',
      defaultOption: 'Select appointment type',
      options: shedType,
      formControlName: 'scheduleType',
      isSelect: true,
    },
    {
      label: 'Select Hospital',
      inputId: 'doctorChamberId',
      defaultOption: 'Select Hospital',
      options: hospital,
      formControlName: 'doctorChamberId',
      isSelect: true,
    },
  ];
};
