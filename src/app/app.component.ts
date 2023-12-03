import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterInputModel } from './shared/utils/models/models';
// import { LoaderService } from './shared/services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
filter!: FormGroup
constructor(private fb: FormBuilder) {
  this.filter = this.fb.group({});
}
filterInput = {
  fields: {
    searchField: {
      formControlName: "search"
    },
    filterField: [
      {
        label: "Consultancy Type",
        fieldType: 'input' ,
        formControlName: "consultancyType"
      },
      {
        label: "Appointment Type",
        fieldType: 'date' ,
        formControlName: "appointmentType"
      },
      {
        label: "Schedule Type",
        fieldType: 'select' ,
        formControlName: "scheduleType",
        options : []
      },
    ]
  }
};


  // isLoading: boolean = false;
  // ]
  // constructor(private LoaderService: LoaderService) {}

  // ngAfterViewInit(){
  //   this.LoaderService.getLoaderState().subscribe((s) => (this.isLoading = s));
  // }


    
   

}

