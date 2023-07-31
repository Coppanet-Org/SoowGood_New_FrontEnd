import { TosterService } from 'src/app/shared/services/toster.service';

import { DoctorProfileService } from 'src/app/proxy/services';
import { slideInFrom } from 'src/app/animation';
import {  Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorTitle } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';
import { Router } from '@angular/router';

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
    private router : Router,
    private cdr :ChangeDetectorRef,
    private _router : Router,
    private TosterService : TosterService,

  ){}

  
  ngOnInit(): void {
    this.doctorTitleList = CommonService.getEnumList(DoctorTitle);
    const currentURL = this.router.url;
    this.getLastPathSegment(currentURL);
  }
  

  // this function need to optimize in future
  getTitle(title:string){
   let doctortitle = this.doctorTitleList.find((e)=>e.id == title)
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
  handleFormData(formData:any) {
    const updatedProfile: DoctorProfileInputDto = {
      ...formData,
    };

  
    let changedProperties: string[] = [];
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] !== this.profileInfo[key]) {
        changedProperties.push(key);
      }
    }
  
    if (changedProperties.length === 0) {
      this.TosterService.customToast('Nothing has changed', 'warning');
      this.loading = false;
    } else {
      this.loading = true;
      this.doctorProfileService.update(updatedProfile).subscribe(
        (res) => {
          // res condition may apply, need to update in the future
          this.loading = false;
          let successMessage = '';

          if (changedProperties.length > 0) {
            if (changedProperties.length > 1) {
              const lastProperty = changedProperties.pop();
              const joinedProperties = changedProperties.join(', ');
              successMessage = `${joinedProperties} and ${lastProperty} Successfully Updated!`;
            } else {
              successMessage = `${changedProperties[0]} Successfully Updated! `;
            }
          }
  
          this.TosterService.customToast(successMessage, 'success');
          changedProperties = []
          successMessage=''
         
          
        },
        (error) => {
          this.loading = false;
          this.TosterService.customToast(error.message, 'error');
        }
      );
   
    }
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
      if (pathName == 'specializations') {
        this.activeTab = '2'
       }
      if (pathName == 'hospital') {
        this.activeTab = '3'
       }
  }
  onchangeStep(e:any){
    if (e.selectedIndex == 0) {
      this._router.navigate(['doctor/profile-settings/basic-info'])
    }
    if (e.selectedIndex == 1) {
      this._router.navigate(['doctor/profile-settings/education'])
    }
    if (e.selectedIndex == 2) {
      this._router.navigate(['doctor/profile-settings/specialization'])
    }if (e.selectedIndex == 3) {
      this._router.navigate(['doctor/profile-settings/hospital'])
    }
  }

}

