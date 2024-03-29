import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-previous-documents-dialog',
  templateUrl: './previous-documents-dialog.component.html',
  styleUrls: ['./previous-documents-dialog.component.scss']
})
export class PreviousDocumentsDialogComponent implements  AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null
  currentSlide: number = 1
  showSlider = false
  Swiper!:Swiper
  selectedFileName:any
  constructor( @Inject(MAT_DIALOG_DATA)
  public docData:any){}


  ngAfterViewInit() {
    this.Swiper = new Swiper(".swiper", {
      speed: 1000,
      spaceBetween: 0,
      slidesPerView: 1,

       modules: [Navigation],
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
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }
  isPdf(fileName: string): boolean {
    return fileName.toLowerCase().endsWith('.pdf');
  }
}
