import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { agentInputData } from 'src/app/shared/utils/input-info';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  isLoading!:boolean
  agentInputData:any =[]
  form!:FormGroup
  url!:any



  constructor(
    private fb: FormBuilder
  ){

  }
  ngOnInit(){
     this.agentInputData = agentInputData
     this.loadForm() 
  }


  
  loadForm() {
    this.form = this.fb.group({
      agentName: [''],
      agentId: [''],
      mobile: ['', Validators.required],
      agentOrganization: [''],
      email:[''],
      address: ['', Validators.required],
      contact:['']
    });
  }

}
