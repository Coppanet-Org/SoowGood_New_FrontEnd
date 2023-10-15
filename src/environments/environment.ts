import { Environment } from '@abp/ng.core';

const baseUrl = 'https://localhost:4202';
const apiUrl = 'https://localhost:44339';
//const issuerUrl = 'https://198.38.92.117';

const issuerUrl = 'https://localhost:44339';

//const localfileUrl = 'https://devsoowgoodnew.azurewebsites.net/';
//const PaymentUrl = 'https://payment.soowgood.com/';
//const meetingUrl = 'https://meet.soowgood.com/';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'SoowGoodWeb',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: issuerUrl,
    redirectUri: baseUrl,
    clientId: 'SoowGoodWeb_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone SoowGoodWeb',
    requireHttps: true,
  },
  apis: {
    default: {
      url: apiUrl,
      //localfileUrl: localfileUrl,
      //PaymentUrl: PaymentUrl,
      //meetingUrl: meetingUrl,
      rootNamespace: 'SoowGoodWeb',
    },
  },
} as Environment;


//export const environment = {
//  production: false,
//  // hmr: false,
//  baseUrl: "http://localhost:5001/api/",
//  basefileUrl: "http://localhost:5001/",
//  localfileUrl: "http://localhost:5001/",
//  PaymentUrl: "http://localhost:58209/",
//  meetingUrl: "http://localhost:44371/",

//    // baseUrl: 'https://soowgood.com/api/',
//    // basefileUrl: 'https://soowgood.com/',
//    // localfileUrl:'https://devsoowgoodnew.azurewebsites.net/',
//    // PaymentUrl:'https://payment.soowgood.com/',
//    // meetingUrl: 'https://meet.soowgood.com/',
//};

