import { TosterService } from 'src/app/shared/services/toster.service';
import { UserAccountsService } from './../../../../proxy/services/user-accounts.service';
import { AgentProfileInputDto } from './../../../../proxy/input-dto/models';
import { AgentProfileService } from './../../../../proxy/services/agent-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SubSink } from 'subsink';
import { AgentMasterDto, AgentSupervisorDto, UserSignUpResultDto } from 'src/app/proxy/dto-models';
import { Router } from '@angular/router';
import { AgentMasterService, AgentSupervisorService } from '../../../../proxy/services';
@Component({
  selector: 'app-agent-signup',
  templateUrl: './agent-signup.component.html',
  styleUrls: ['./agent-signup.component.scss'],
})
export class AgentSignupComponent implements OnInit {
  signupForm!: FormGroup;
  isLoading!: boolean;
  agentProfileDto!: AgentProfileInputDto;
  agenetMasterList!: AgentMasterDto[];
  agentSupervisorList!: AgentSupervisorDto[];
  agentId: any;
  subs = new SubSink();
  constructor(
    private fb: FormBuilder,
    private AgentProfileService: AgentProfileService,
    private AgentMasterService: AgentMasterService,
    private AgentSupervisorService: AgentSupervisorService,
    private NormalAuth: AuthService,
    private UserAccountsService: UserAccountsService,
    private TosterService : TosterService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.loadForm();
    this.AgentMasterService.getAllAgentMasterList().subscribe((res) => (this.agenetMasterList = res));
  }

  loadForm() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      //agentCode: ['123456', Validators.required],
      organizationName: ['0', Validators.required],
      agentSuperVisor: ['0', Validators.required],
      address: ['', Validators.required],
      city: ['Dhaka', Validators.required],
      zipCode: ['1212', Validators.required],
      country: ['Bangladesh', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      isActive: ['true', Validators.required],
    });
  }
  onSubmit() {
    this.isLoading = true;

    if (!this.signupForm.valid) {
      this.isLoading = false
      this.TosterService.customToast("Please filed all required field", 'warning');
      return 
    }

    const agentInfo = {
      tenantId: '',
      userName: this.signupForm.value.mobileNo,
      name: this.signupForm?.value.fullName,
      
      surname: '',
      email: this.signupForm.value.email,
      emailConfirmed: true,
      phoneNumber: this.signupForm.value.mobileNo,
      phoneNumberConfirmed: true,
      //agentMasterId: this.signupForm.value.organizationName,
      //agentSupervisorId: this.signupForm.value.agentSuperVisor,
      address: this.signupForm.value.address,
      city: this.signupForm.value.city,
      zipCode: this.signupForm.value.zipCode,
      country: this.signupForm.value.country,
      isActive: true,
      lockoutEnabled: false,
      lockoutEnd: '2023-07-16T07:38:44.382Z',
      concurrencyStamp: '',
      agentMasterId: this.signupForm.value.organizationName,
      agentSupervisorId: this.signupForm.value.agentSuperVisor,
    };

    

    this.UserAccountsService.signupUserByUserDtoAndPasswordAndRole(
      agentInfo,
      this.signupForm.value?.password,
      'Agent'
    ).subscribe((res: UserSignUpResultDto) => {

      
      if (res.success) {
        this.AgentProfileService.create({
          ...this.signupForm.value,

          agentMasterId:this.signupForm.value?.organizationName,
          agentSupervisorId:this.signupForm.value?.agentSuperVisor,
          userId: res.userId,
        }).subscribe((profRes: any) => {
          this.subs.sink = this.AgentProfileService.getByUserId(
            profRes.userId
          ).subscribe((agentDto: AgentProfileInputDto) => {
            this.agentProfileDto = agentDto;
            this.agentId = agentDto.id;
            //let saveLocalStorage = {
            //  agentName: agentDto.fullName,
            //  isActive: agentDto.isActive,
            //  userId: res.userId,
            //  id: agentDto.id,
            //  userType :"agent"
            //};
            //this.NormalAuth.setAuthInfoInLocalStorage(saveLocalStorage);

            this.NormalAuth.signOut();
            //if (this.normalAuth) {
            //  this.loadAuth();
            //}
            //let navUrl = this.userType.toLowerCase() + '/dashboard';
            this._router
              .navigate(['/agent/login'], {
                state: { data: res }, // Pass the 'res' object as 'data' in the state object
              })
              .then((r) =>
                this.TosterService.customToast(String(res.message), 'success')
              );

            //this.TosterService.customToast(String(res.message), 'success');
            //this._router.navigate(["/agent"])
          });
        });
      } else{
        this.isLoading = false
        this.TosterService.customToast(String(res.message), 'error');
      }
    });
  }

  loadAgentSupervisors(event: any) {
    this.AgentSupervisorService.getAgentSupervisorsByAgentMasterList(event.target.value).subscribe(res => {
      this.agentSupervisorList = res;
    })
  }
}
