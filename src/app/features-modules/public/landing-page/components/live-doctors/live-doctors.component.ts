
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Router } from '@angular/router';



@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss']
})
export class LiveDoctorsComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null

  showSlider = false

  ngOnInit(): void {

    this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
      next: (res) => {
        this.liveDoctorList = res
        if (this.slider) {
          setTimeout(() => {
            this.slider?.update(undefined, 0)
            this.showSlider = true
            // Required when using indicator dots below the slides
            this.updateDotHelper()
          }, .1)
        }

      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log("completed");


      },
    })
  }

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  // slider: KeenSliderInstance = null
  ngAfterViewInit() {
    if (this.sliderRef && this.sliderRef.nativeElement) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        // initial: this.currentSlide,
        slides: {
          perView: 1,
        },
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      // this.dotHelper = [
      //   ...Array(this.slider.track.details.slides.length).keys(),
      // ]

    }
  }

  private updateDotHelper(): void {
    if (this.slider) {
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.doResize = true
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


  doResize: boolean = false


  ngAfterViewChecked(): void {
    if (this.slider && this.doResize) this.slider.resize()
    this.doResize = false
  }












  // ngOnDestroy(){
  //   if(this.slider) this.slider.destroy()
  // }
  liveDoctorList: any
  constructor(private DoctorStateService: DoctorStateService, private router: Router) {


  }



  onClickSeeMore(value: string) {


    if (value) {
      this.router.navigate(['/search'], { queryParams: { type: value } });
    } else {
      // Handle the case where searchText is undefined or falsy.
      // You might want to show an error message or take appropriate action.
    }

  }


}
