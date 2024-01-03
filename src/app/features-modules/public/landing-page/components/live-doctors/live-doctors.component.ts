import { DocumentsAttachmentService } from 'src/app/proxy/services';

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
import KeenSlider from 'keen-slider';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss'],
})
export class LiveDoctorsComponent
  implements OnInit, AfterViewInit, OnChanges, AfterViewChecked
{
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  public picUrl = `${environment.apis.default.url}/`;
  doResize: boolean = false;
  showSlider = false;
  liveDoctorList: any;
  isLoading: boolean = false;
  noData : boolean =false
  constructor(
    private DoctorStateService: DoctorStateService,
    private router: Router,
    private DocumentsAttachmentService: DocumentsAttachmentService
  ) {}
  ngOnInit(): void {
    this.getDoctorDetails();
    if (this.slider) {
      setTimeout(() => {
        this.slider?.update(undefined, 0);
        this.showSlider = true;
        this.updateDotHelper();
      }, 0);
    }
  }

  ngAfterViewInit() {
    if (this.sliderRef && this.sliderRef.nativeElement) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        // initial: this.currentSlide,
        slides: {
          perView: 1,
        },
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      // this.dotHelper = [
      //   ...Array(this.slider.track.details.slides.length).keys(),
      // ]
    }
  }

  private updateDotHelper(): void {
    if (this.slider) {
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doResize = true;
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
  ngAfterViewChecked(): void {
    if (this.slider && this.doResize) this.slider.resize();
    this.doResize = false;
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
