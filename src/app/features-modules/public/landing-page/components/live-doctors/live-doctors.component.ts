import { DocumentsAttachmentService } from 'src/app/proxy/services';
import Swiper,{Autoplay, Navigation,Pagination} from "swiper";
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
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss'],
})
export class LiveDoctorsComponent
  implements OnInit, AfterViewInit
{

  public picUrl = `${environment.apis.default.url}/`;
  // swiper!: Swiper;
  liveDoctorList: any;
  isLoading: boolean = false;
  noData : boolean =false
  swiper!: Swiper;
  constructor(
    private DoctorStateService: DoctorStateService,
    private router: Router,
    private DocumentsAttachmentService: DocumentsAttachmentService
  ) {}
  ngOnInit(): void {
    this.getDoctorDetails();

  }

  ngAfterViewInit() {
    this.swiper = new Swiper(".swiper", {
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 5000,
      },
       modules: [Navigation,Pagination,Autoplay],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

 



  onClickSeeMore(value: string) {
    if (value) {
      this.router.navigate(['/search'], { queryParams: { type: value } });
    }
    return;
  }
  getDoctorDetails() {
    this.liveDoctorList =[]
    this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
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
