import KeenSlider from "keen-slider"
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-previous-documents-dialog',
  templateUrl: './previous-documents-dialog.component.html',
  styleUrls: ['./previous-documents-dialog.component.scss']
})
export class PreviousDocumentsDialogComponent implements AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null
  currentSlide: number = 1
  showSlider = false
  constructor( @Inject(MAT_DIALOG_DATA)
  public docData:any){}
  ngAfterViewInit() {
    if (this.sliderRef && this.sliderRef.nativeElement) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        // initial: this.currentSlide,
        slides: {
          perView: 1,
        },
        
      })
      // this.dotHelper = [
      //   ...Array(this.slider.track.details.slides.length).keys(),
      // ]

    }
  }
  
}
