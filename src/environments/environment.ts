import { Environment } from '@abp/ng.core';

//const baseUrl = 'https://103.125.253.240:4439';
//const apiUrl = 'https://103.125.253.240:4437';
//const issuerUrl = 'https://103.125.253.240';
//'https://apisoowgoodbeta.com'; //
const baseUrl = 'https://soowgoodbeta.com';
const apiUrl = 'https://apisoowgoodbeta.com'; //'https://localhost:44339';//
const issuerUrl = 'https://authsoowgoodbeta.com';

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
      rootNamespace: 'SoowGoodWeb',
    },
  },
} as Environment;


