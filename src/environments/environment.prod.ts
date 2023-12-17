import { Environment } from '@abp/ng.core';

//const baseUrl = 'http://localhost:4202';
//const apiUrl = 'https://localhost:44339';
//const issuerUrl = 'https://localhost:44339';

const baseUrl = 'https://192.168.1.105:4439';
const apiUrl = 'https://192.168.1.105:4437';
const issuerUrl = 'https://192.168.1.105';


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

