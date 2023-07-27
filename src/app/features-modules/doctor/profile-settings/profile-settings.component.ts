import { DoctorProfileService } from 'src/app/proxy/services';
import { slideInFrom } from 'src/app/animation';
import {  Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorTitle } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent implements OnInit  {
  animationDirection = 'right';
  selectedIndex:any
  userId:any;
  loading:boolean=false;
  profileInfo :any
  doctorTitleList:ListItem[]=[]
  title:any
  activeTab: string= '';

  constructor(
    private _fb: FormBuilder,
    private doctorProfileService :DoctorProfileService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.doctorTitleList = CommonService.getEnumList(DoctorTitle);
    const currentURL = this.router.url;
    this.getLastPathSegment(currentURL);

  }
  

  getTitle(title:string){
   let doctortitle = this.doctorTitleList.find((e)=>e.id == title)
   console.log("hello");
   
  return doctortitle?.name
   
  }
  firstFormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  getProfileData(data:any){
    this.profileInfo = data
  }
  handleFormData(formData: FormGroup) {
    this.loading = true
    const doctorProfileInput: DoctorProfileInputDto = {
      degrees: [], // Set the appropriate value here or leave it empty based on your requirements
      doctorSpecialization: [], // Set the appropriate value here or leave it empty based on your requirements
      ...formData, // Copy all other form values to the DoctorProfileInputDto object
    };

    this.doctorProfileService.update(doctorProfileInput).subscribe(
      (res) => {
        if (res) {
          this.loading = false
        }
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  getLastPathSegment(url: string): void {
    const urlParts = url.split('/');
     let pathName= urlParts[urlParts.length - 1];

     if (pathName == 'basic-info') {
       this.activeTab = '0'
      }
      if (pathName == 'education') {
       this.activeTab = '1'
      }
  }
  
  
}
