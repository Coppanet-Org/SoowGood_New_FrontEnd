import { DocumentsAttachmentService } from 'src/app/proxy/services';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
// import { Navigation } from "swiper/modules";

import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, filter } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss'],
})
export class LiveDoctorsComponent implements OnInit {
  public picUrl = `${environment.apis.default.url}/`;
  // swiper!: Swiper;
  liveDoctorList: any;
  isLoading: boolean = false;
  noData: boolean = false;
  swiper!: Swiper;
  constructor(
    private DoctorStateService: DoctorStateService,
    private router: Router,
    private DocumentsAttachmentService: DocumentsAttachmentService
  ) {}
  ngOnInit(): void {
    this.getDoctorDetails();
  }

  onClickSeeMore(value: string) {
    if (value) {
      this.router.navigate(['/search'], { queryParams: { type: value } });
    }
    return;
  }
  getDoctorDetails() {
    this.liveDoctorList = [];
    this.DoctorStateService.getCurrentlyOnlineDoctorList()
      .pipe(
        map((list: any) => {
          return list.filter((e: any, i: number) => {
            return i < 12;
          });
        })
      )
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          const onlineDoctors = res;
          const profilePictureObservables = onlineDoctors.map((doctor: any) => {
            return this.DocumentsAttachmentService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
              'Doctor',
              doctor.id,
              'ProfilePicture'
            );
          });
          forkJoin(profilePictureObservables).subscribe(
            (profilePictureResults: any) => {
              this.liveDoctorList = onlineDoctors.map(
                (doctor: any, index: any) => {
                  const profilePicInfo = profilePictureResults[index];
                  let profilePicUrl = '';
                  if (profilePicInfo) {
                    const prePaths: string = profilePicInfo.path || '';
                    const re = /wwwroot/gi;
                    const profilePic = prePaths.replace(re, '');
                    profilePicUrl = this.picUrl + profilePic;
                  }
                  return {
                    ...doctor,
                    profilePicUrl: profilePicUrl,
                  };
                }
              );
            }
          );
        },
        error: (err) => {
          console.log(err);
          // this.isLoading = false;
        },
        complete() {
          console.log('completed');
        },
      });
  }
}
