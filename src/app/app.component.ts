import { LoaderService } from './shared/services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'soowgood-v2';
  isLoading!: boolean;
  constructor(private LoaderService: LoaderService) {
    
  }

  ngOnInit(){
    this.LoaderService.getLoaderState().subscribe((s) => (this.isLoading = s));
  }
}
