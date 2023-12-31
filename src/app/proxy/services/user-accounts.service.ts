import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LoginDto, LoginResponseDto, ResetPasswordInputDto, ResetPasswordResponseDto, UserInfoDto, UserSignUpResultDto } from '../dto-models/models';
import type { IdentityUser } from '../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class UserAccountsService {
  apiName = 'Default';
  

  isUserExistsByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/user-accounts/is-user-exists',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  loginByUserDto = (userDto: LoginDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoginResponseDto>({
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
  

  resetPasswordByInputDto = (inputDto: ResetPasswordInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResetPasswordResponseDto>({
      method: 'POST',
      url: '/api/app/user-accounts/reset-password',
      body: inputDto,
    },
    { apiName: this.apiName,...config });
  

  resetPassword_AppByInputDto = (inputDto: ResetPasswordInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ResetPasswordResponseDto>({
      method: 'POST',
      url: '/api/app/user-accounts/reset-password_App',
      body: inputDto,
    },
    { apiName: this.apiName,...config });
  

  signupUserByUserDtoAndPasswordAndRole = (userDto: UserInfoDto, password: string, role: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserSignUpResultDto>({
      method: 'POST',
      url: '/api/app/user-accounts/signup-user',
      params: { password, role },
      body: userDto,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
