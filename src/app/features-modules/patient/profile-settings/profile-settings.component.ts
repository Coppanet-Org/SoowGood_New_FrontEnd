import { countries } from './../../../shared/utils/country';
import { TosterService } from './../../../shared/services/toster.service';
import { PatientProfileService } from './../../../proxy/services/patient-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { patientInputData } from 'src/app/shared/utils/input-info';
import { DatePipe } from '@angular/common';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { customNameValidator } from 'src/app/shared/utils/auth-helper';
import { Gender } from 'src/app/proxy/enums';
import { CommonService } from 'src/app/shared/services/common.service';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  form!: FormGroup;
  patientInputData: any = patientInputData;
  isLoading: boolean = false;
  url!: any;
  patientId: any;
  profileInfo: any;
  formSubmitted: boolean = false;
  genderList: any;
  countryList= countries
  constructor(
    private fb: FormBuilder,
    private PatientProfileService: PatientProfileService,
    private NormalAuth: AuthService,
    private TosterService: TosterService,
    private UserinfoStateService: UserinfoStateService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.genderList = CommonService.getEnumList(Gender);
    let authId = this.NormalAuth.authInfo().id;
    this.patientId = authId;
    this.fetchProfileInfo(authId);
    this.UserinfoStateService.getData().subscribe(
      (userInfo) => (this.profileInfo = userInfo)
    );
  }

  loadForm() {
    this.form = this.fb.group({
      fullName: [
        '',
        [Validators.required, Validators.minLength(3), customNameValidator],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/),
        ],
      ],

      gender: ['', Validators.required],
      age: ['', Validators.required],
     
      dateOfBirth: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      country: ['', Validators.required],
      address: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)],
      ],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    });
  }
  submit() {
    this.formSubmitted = true;

    this.isLoading = true;

    let changedProperties: string[] = [];

    for (const key in this.form.value) {
      if (
        this.form.value.hasOwnProperty(key) &&
        this.form.value[key] !== this.profileInfo[key]
      ) {
        changedProperties.push(key);
      }
    }
    if (changedProperties.length === 0) {
      this.TosterService.customToast('Nothing has changed', 'warning');
      this.isLoading = false;
      this.formSubmitted = true;
    } else {
      this.isLoading = true;
      this.formSubmitted = true;
      this.PatientProfileService.update({
        ...this.form.value,
        id: this.patientId,
      }).subscribe(
        (res) => {
          // res condition may apply, need to update in the future
          // this.isLoading = false;
          // let successMessage = '';

          // if (changedProperties.length > 0) {
          //   if (changedProperties.length > 1) {
          //     const lastProperty = changedProperties.pop();
          //     const joinedProperties = changedProperties.join(', ');
          //     successMessage = `${joinedProperties} and ${lastProperty} Successfully Updated!`;

          //   } else {
          //     successMessage = `${changedProperties[0]} Successfully Updated! `;
          //   }
          // }
          this.TosterService.customToast('Successfully update', 'success');
          this.isLoading = false;
          this.formSubmitted = false;
          this.UserinfoStateService.getProfileInfo(this.patientId, 'patient');
        },
        (error) => {
          this.isLoading = false;
          this.formSubmitted = false;
          this.TosterService.customToast(error.message, 'error');
        }
      );
    }
  }

  fetchProfileInfo(authId: any): void {
    if (!authId) {
      return;
    }
    this.UserinfoStateService.getData().subscribe(
      (profileInfo) => {
        profileInfo.dateOfBirth = this.formatDate(profileInfo.dateOfBirth); // Format the date of birth
        this.form?.patchValue(profileInfo);
      },
      (error) => {
        this.TosterService.customToast(error.message, 'error');
      }
    );
  }

  private formatDate(dateString: string | undefined): any {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
}
