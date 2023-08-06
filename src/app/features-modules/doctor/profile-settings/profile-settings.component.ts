import {
  DoctorProfileService,
  DocumentsAttachmentService,
} from 'src/app/proxy/services';
import { slideInFrom } from 'src/app/animation';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorTitle } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { MatIcon } from '@angular/material/icon';
import { ToasterService } from '@abp/ng.theme.shared';
import { environment } from '../../../../environments/environment';
import { SubSink } from 'SubSink';
import { HttpClient } from '@angular/common/http';
import { DocumentsAttachmentDto } from '../../../proxy/dto-models';
import { TosterService } from 'src/app/shared/services/toster.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PictureDialogComponent } from './picture-dialog/picture-dialog.component';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent implements OnInit {
  @ViewChild('attachments') attachment: any;
  animationDirection = 'right';
  selectedIndex: any;
  userId: any;
  loading: boolean = false;
  profileInfo: any;
  doctorTitleList: ListItem[] = [];
  title: any;
  activeTab: string = '';
  subs = new SubSink();
  fileList: File[] = [];
  fileNames: any[] = [];
  //formg!: FormGroup;
  fileData = new FormData();
  imagePath: any;
  upload: any;
  auth: any;
  url: any;
  profilePic: string = '';

  private apiUrl = `${environment.apis.default.url}/api`;
  public picUrl = `${environment.apis.default.url}/`;
  doctorId: any;

  constructor(
    private _fb: FormBuilder,
    private doctorProfileService: DoctorProfileService,
    private doctorProfilePicService: DocumentsAttachmentService,
    private _router: Router,
    private TosterService: TosterService,
    private cdRef: ChangeDetectorRef,
    private http: HttpClient,
    private normalAuth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //this.auth = localStorage.getItem("auth");
    let authId = this.normalAuth.authInfo().id;
    this.doctorId = authId;

    this.doctorTitleList = CommonService.getEnumList(DoctorTitle);
    const currentURL = this._router.url;
    this.getLastPathSegment(currentURL);
  }

  getProfileInfo(id: any): void {
    if (id) {
      this.doctorProfileService.get(id).subscribe((res) => {
        this.profileInfo = res;
      });
    }
  }
  // this function need to optimize in future
  getTitle(title: string) {
    let doctortitle = this.doctorTitleList.find((e) => e.id == title);
    return doctortitle?.name;
  }
  firstFormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  getProfileData(data: any) {
    this.profileInfo = data;
    this.getProfilePic();
  }

  handleFormData(formData: any) {
    const updatedProfile: DoctorProfileInputDto = {
      ...formData,
    };
    let changedProperties: string[] = [];

    for (const key in formData) {
      if (
        formData.hasOwnProperty(key) &&
        formData[key] !== this.profileInfo[key]
      ) {
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
          this.getProfileInfo(this.doctorId);
        },
        (error) => {
          this.loading = false;
          this.TosterService.customToast(error.message, 'error');
        }
      );
    }
    //if (this.fileList.length > 0) {
    //  this.fileData.append("entityId", this.profileInfo.id.toString());
    //  this.fileData.append("entityType", "Doctor");
    //  this.fileData.append("attachmentType", "ProfilePicture");
    //  this.fileData.append("directoryName", "DoctorProfilePicture\\" + this.profileInfo.id.toString());
    //  if (this.fileList.length > 0) {
    //    for (let item of this.fileList) {
    //      let fileToUpload = item;
    //      this.fileData.append(item.name, fileToUpload);
    //    }
    //    // save attachment
    //    this.http.post(`${this.apiUrl}/Common/Documents`, this.fileData).subscribe(
    //      (result: any) => {
    //        //this.form.reset();
    //        //this.fileData = new FormData();
    //        //this.fileNames = this.fileNames;
    //        this.TosterService.customToast('Picture Changed Successfully', 'success');

    //      },
    //      (err) => {
    //        console.log(err);
    //      });
    //    this.cdRef.detectChanges();
    //  }
    //}
  }

  getLastPathSegment(url: string): void {
    const urlParts = url.split('/');
    let pathName = urlParts[urlParts.length - 1];

    if (pathName == 'basic-info') {
      this.activeTab = '0';
    }
    if (pathName == 'education') {
      this.activeTab = '1';
    }
    if (pathName == 'specializations') {
      this.activeTab = '2';
    }
    if (pathName == 'hospital') {
      this.activeTab = '3';
    }
  }

  onchangeStep(e: any) {
    if (e.selectedIndex == 0) {
      this._router.navigate(['doctor/profile-settings/basic-info']);
    }
    if (e.selectedIndex == 1) {
      this._router.navigate(['doctor/profile-settings/education']);
    }
    if (e.selectedIndex == 2) {
      this._router.navigate(['doctor/profile-settings/specialization']);
    }
    if (e.selectedIndex == 3) {
      this._router.navigate(['doctor/profile-settings/hospital']);
    }
  }

  //Profile Picture Related Functions

  getProfilePic() {
    this.subs.sink = this.doctorProfilePicService
      .getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
        'Doctor',
        this.profileInfo.id,
        'ProfilePicture'
      )
      .subscribe((at) => {
        if (at) {
          let prePaths: string = '';
          var re = /wwwroot/gi;
          prePaths = at.path ? at.path : '';
          this.profilePic = prePaths.replace(re, '');
          this.url = this.picUrl + this.profilePic;
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PictureDialogComponent, {
      width: '30vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getProfilePic();
      }
    });
  }
}
