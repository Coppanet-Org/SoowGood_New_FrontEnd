import { AgentProfileService } from './../../../proxy/services/agent-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { agentInputData } from 'src/app/shared/utils/input-info';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  isLoading!: boolean;
  agentInputData: any = [];
  form!: FormGroup;
  url!: any;
  agentId: any;

  constructor(
    private fb: FormBuilder,
    private NormalAuth: AuthService,
    private AgentProfileService: AgentProfileService,
    private TosterService: TosterService
  ) {}
  ngOnInit() {
    let id = this.NormalAuth.authInfo().id;
    this.agentId = id;
    if (id) {
      this.AgentProfileService.get(id).subscribe((res) =>
        this.form.patchValue(res)
      );
    }
    this.agentInputData = agentInputData;
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      fullName: [''],
      agentCode: [''],
      mobileNo: ['', Validators.required],
      organizationName: [''],
      email: [''],
      address: ['', Validators.required],
      contact: [''],
    });
  }

  onUpdateAgentDate() {
    this.isLoading = true;
    try {
      this.AgentProfileService.update({
        ...this.form.value,
        id: this.agentId,
      }).subscribe((res) => {
        console.log(res);
        this.TosterService.customToast(
          'Successfully updated',
          'success'
        );
        this.isLoading = false
      });
    } catch (error) {
      this.TosterService.customToast("Update Failed", 'error' )
    }
  }
}
