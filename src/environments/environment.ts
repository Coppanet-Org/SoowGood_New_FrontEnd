import { Environment } from '@abp/ng.core';

const baseUrl = 'https://localhost:4202';
const apiUrl = 'https://localhost:44339';
const issuerUrl = 'https://localhost:44380';

//const baseUrl = 'https://198.38.92.117:4439';
//const apiUrl = 'https://198.38.92.117:4437';
//const issuerUrl = 'https://198.38.92.117';


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


