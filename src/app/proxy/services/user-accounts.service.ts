import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LoginDto, UserInfoDto, UserRegInfoDto } from '../dto-models/models';
import type { IdentityUser } from '../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class UserAccountsService {
  apiName = 'Default';
  

  loginByUserDto = (userDto: LoginDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUser>({
      method: 'POST',
      url: '/api/app/user-accounts/login',
      body: userDto,
    },
    { apiName: this.apiName,...config });
  

  refreshAccessTokenByUser = (user: IdentityUser, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/user-accounts/refresh-access-token',
      body: user,
    },
    { apiName: this.apiName,...config });
  

  registerByUser = (user: UserRegInfoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/app/user-accounts/register',
      body: user,
    },
    { apiName: this.apiName,...config });
  

  signupUserByUserDtoAndPasswordAndRole = (userDto: UserInfoDto, password: string, role: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/app/user-accounts/signup-user',
      params: { password, role },
      body: userDto,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
