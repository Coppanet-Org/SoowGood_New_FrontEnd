import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


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
  authUser: any;

  constructor(private fb: FormBuilder, private router : Router, private NormalAuth : AuthService){}

  ngOnInit(): void {
    this.loadForm()
   this.authUser = this.NormalAuth.authInfo()
    this.searchForm.get('service')?.valueChanges.subscribe(service => {
       this.service = service
    });
    this.searchForm.get('searchText')?.valueChanges.subscribe(searchText => {
      this.searchText = searchText
   });
  }

  loadForm(){
   this.searchForm = this.fb.group({
    service :['0'],
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
