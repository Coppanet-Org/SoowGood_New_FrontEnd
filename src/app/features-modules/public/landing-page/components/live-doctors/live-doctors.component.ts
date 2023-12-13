
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider'
// import "keen-slider/dist/keen-slider.min.css"



@Component({
  selector: 'app-live-doctors',
  templateUrl: './live-doctors.component.html',
  styleUrls: ['./live-doctors.component.scss']
})
export class LiveDoctorsComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null
  slides = [
    {color: '#007bff' ,text: 'Slider 1'}, 
    {color: '#6c757d' ,text: 'Slider 2'},
    {color: '#17a2b8' ,text: 'Slider 3'},
    {color: '#28a745' ,text: 'Slider 4'},
    {color: '#dc3545' ,text: 'Slider 5'},
    {color: '#ffc107' ,text: 'Slider 6'}
  ]

  
    


    ngAfterViewInit() {
      if (this.sliderRef && this.sliderRef.nativeElement) {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          slides: {
            perView: 4,
            spacing: 15,
          },
        });
      }
    }
    
  

  // ngOnDestroy(){
  //   if(this.slider) this.slider.destroy()
  // }
liveDoctorList:any
  constructor(private DoctorStateService : DoctorStateService){

    this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
      next:(res)=>{
        this.liveDoctorList = res
      },
      error:(err)=>{
        console.log(err);
      },
      complete() {
        console.log("completed");
      },
    })
  }






}
