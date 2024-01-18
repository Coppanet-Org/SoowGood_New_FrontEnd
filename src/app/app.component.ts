import {  Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loaderService.getLoaderState().subscribe((s) => {
      this.isLoading = s;
      this.cdr.detectChanges(); 
    });
  }
}

