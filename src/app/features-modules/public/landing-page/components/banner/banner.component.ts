import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  serviceList:any=[
    {
      name:"Doctors",
      id:1
    },
    {
      name:"Ambulance",
      id:2
    },
    {
      name:"Medical Test",
      id:3
    },
  ]
  searchForm!:FormGroup
  service:any;
  searchText='';

  constructor(private fb: FormBuilder, private router : Router){}

  ngOnInit(): void {
    this.loadForm()
    this.searchForm.get('service')?.valueChanges.subscribe(service => {
       this.service = service
    });
    this.searchForm.get('searchText')?.valueChanges.subscribe(searchText => {
      this.searchText = searchText
   });
  }

  loadForm(){
   this.searchForm = this.fb.group({
    service :['0',Validators.required],
    searchText :['',Validators.required]
   })
  }
  onChangeService(e:any){

  }
  goToServicePage(){


    if (this.service=='Doctors') {
       this.router.navigate(['/search', '/' +this.searchText ])
    } else {
      
    }
  }
}
