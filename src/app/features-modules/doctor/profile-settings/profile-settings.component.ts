import { DoctorProfileService, DocumentsAttachmentService } from 'src/app/proxy/services';
import { slideInFrom } from 'src/app/animation';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorProfileInputDto } from 'src/app/proxy/input-dto';
import { CommonService } from 'src/app/shared/services/common.service';
import { DoctorTitle } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { ToasterService } from '@abp/ng.theme.shared';
import { environment } from '../../../../environments/environment';
import { SubSink } from 'SubSink';
import { HttpClient } from '@angular/common/http';
import { DocumentsAttachmentDto } from '../../../proxy/dto-models';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent implements OnInit {
  @ViewChild('attachments') attachment: any;
  animationDirection = 'right';
  selectedIndex: any
  userId: any;
  loading: boolean = false;
  profileInfo: any
  doctorTitleList: ListItem[] = []
  title: any
  activeTab: string = '';

  subs = new SubSink();

  fileList: File[] = [];
  fileNames: any[] = [];
  //formg!: FormGroup;
  fileData = new FormData();
  imagePath: any;
  upload: any;

  profilePic: string = '';

  private apiUrl = `${environment.apis.default.url}/api`;
  public picUrl = `${environment.apis.default.url}/`;

  constructor(
    private _fb: FormBuilder,
    private doctorProfileService: DoctorProfileService,
    private doctorProfilePicService: DocumentsAttachmentService,
    private router: Router,
    private toastr: ToasterService,
    private cdRef: ChangeDetectorRef,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.doctorTitleList = CommonService.getEnumList(DoctorTitle);
    const currentURL = this.router.url;
    this.getLastPathSegment(currentURL);
    
  }


  getTitle(title: string) {
    let doctortitle = this.doctorTitleList.find((e) => e.id == title)
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


  getProfileData(data: any) {
    this.profileInfo = data;
    this.getProfilePic();
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
    let pathName = urlParts[urlParts.length - 1];

    if (pathName == 'basic-info') {
      this.activeTab = '0'
    }
    if (pathName == 'education') {
      this.activeTab = '1'
    }
  }

  getProfilePic() {
    this.subs.sink = this.doctorProfilePicService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType("Doctor", this.profileInfo.id, "ProfilePicture").subscribe((at) => {
      let prePaths: string = "";
      var re = /wwwroot/gi;
      prePaths = at.path ? at.path : "";
      this.profilePic = prePaths.replace(re, "");
    });
  }

  uploadPic() {
    //this.fileData = new FormData();
    this.fileData.append("entityId", this.profileInfo.id.toString());
    this.fileData.append("entityType", "Doctor");
    this.fileData.append("attachmentType", "ProfilePicture");
    this.fileData.append("directoryName", "DoctorProfilePicture\\" + this.profileInfo.id.toString());
    if (this.fileList.length > 0) {
      for (let item of this.fileList) {
        let fileToUpload = item;
        this.fileData.append(item.name, fileToUpload);
      }
      // save attachment
      this.http.post(`${this.apiUrl}/Common/Documents`, this.fileData).subscribe(
        (result: any) => {
          //this.form.reset();
          //this.fileData = new FormData();
          //this.fileNames = this.fileNames;
          this.toastr.success(result['Message'], result['Status']);
          this.cdRef.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.fileNames.push(selectedFile.name)
    }
    if (this.fileList.length > 0) {
      this.checkFileValidation(event);
    }
    this.attachment.nativeElement.value = '';
  }

  removeSelectedFile(index: any) {
    // delete file name from fileNames list
    this.fileNames.splice(index, 1);
    // delete file from FileList
    this.fileList.splice(index, 1);
  }

  checkFileValidation(event: any) {
    let count = event.target.files.length;
    if (count > 0) {
      var allowedFiles = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf', 'text/plain'];
      const files: File[] = event.target.files;
      this.fileList = Array.from(files);
      for (let i = 0; i < count; i++) {
        if (files[i].size > 5242880) {
          this.fileNames.splice(i, 1);
          this.fileList.splice(i, 1);
          console.log("Maximum 5MB Accepted.");
          //this.toastr.warning('Maximum 5MB Accepted.', 'Warning');
        }
        if (!(allowedFiles.indexOf(files[i].type.toLowerCase()) >= 0)) {
          this.fileNames.splice(i, 1);
          this.fileList.splice(i, 1);
          //this.toastr.warning('Only png, jpeg, jpg, plain text, pdf are Accepted.');
          console.log("Only png, jpeg, jpg, plain text, pdf are Accepted.", 'Warning');
        }
      }
      this.cdRef.detectChanges();
    }
  }

}
