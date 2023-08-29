import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TosterService } from 'src/app/shared/services/toster.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss']
})
export class AgentLoginComponent {
loginForm!: FormGroup
isLoading!:boolean
constructor(
  private ToasterService : TosterService
){

}

onSubmit(): void {
  if (!this.loginForm.valid && !this.loginForm.touched) {
    this.ToasterService.customToast(
      'Please filled all required field',
      'warning'
    );
    return;
  }


  try {
    this.authService
      .loginByUserDto(this.loginDto)
      .pipe(
        catchError((error: any) => this.handleLoginError(error)),
        switchMap((loginResponse: LoginResponseDto) => {
          loginResponseData = loginResponse;
          if (!loginResponse.success) {
            this.hasError = true;
            this.ToasterService.customToast(
              loginResponse.message || ' ',
              'error'
            );
            return throwError(loginResponse.message || 'Login failed');
          }
          return this.doctorProfileService.getByUserName(
            loginResponse.userName || ''
          );
        }),
        catchError((error: any) => this.handleProfileError(error))
      )
      .subscribe((doctorDto: DoctorProfileDto) => {

        console.log(doctorDto);
        
        const saveLocalStorage = {
          identityNumber: doctorDto.identityNumber,
          bmdcRegNo: doctorDto.bmdcRegNo,
          isActive: doctorDto.isActive,
          userId: doctorDto.userId,
          id: doctorDto.id,
          profileStep: doctorDto.profileStep,
          createFrom: doctorDto.createFrom,
          userType: loginResponseData.roleName.toString().toLowerCase()
        };
        this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);
        const userType = doctorDto.isActive
          ? loginResponseData.roleName.toString().toLowerCase()
          : (
              loginResponseData.roleName.toString() +
              '/profile-settings/basic-info'
            ).toLowerCase();
        this._router
          .navigate([userType], {
            state: { data: doctorDto }, 
          })
          .then(() =>
            this.ToasterService.customToast(
              loginResponseData.message || ' ',
              'success'
            )
          );
      });
  } catch (error: any) {
    this.hasError = true;
    if (error.message === "'tokenEndpoint' should not be null") {
      this.errorMessage = 'Identity server is not running';
    }
  }
}
ngOnDestroy() {
  this.subs.unsubscribe();
}
}
