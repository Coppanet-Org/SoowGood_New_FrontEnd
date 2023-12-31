import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {


  isLoading: boolean = false;
  
  constructor(private LoaderService: LoaderService) {}

  ngAfterViewInit(){
    this.LoaderService.getLoaderState().subscribe((s) => (this.isLoading = s));
  }


    
   

}

