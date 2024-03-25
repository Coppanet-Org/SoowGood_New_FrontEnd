import { PlatformFacilityService } from './../../../../../proxy/services/platform-facility.service';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlatformFacilityDto } from 'src/app/proxy/dto-models';
import { PlatformFacilityInputDto } from 'src/app/proxy/input-dto';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  serviceList!: PlatformFacilityInputDto[];
  searchForm!: FormGroup;
  service: any;
  searchText = '';
  authUser: any;
  profileStep: any;
  userRole: any;
  navlink: any;
  swiper!: Swiper;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private NormalAuth: AuthService,
    private PlatformFacilityService: PlatformFacilityService
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.getPlatformList();
    this.authUser = this.NormalAuth.authInfo();
    this.profileStep = this.authUser ? this.authUser.profileStep : null;
    this.userRole = this.authUser ? this.authUser.userType : null;
    //this.navlink = this.userRole.toString().toLowerCase() + '/dashboard';
    this.searchForm.get('service')?.valueChanges.subscribe((service) => {
      this.service = service;
    });
    this.searchForm.get('searchText')?.valueChanges.subscribe((searchText) => {
      this.searchText = searchText;
    });
  }

  loadForm() {
    this.searchForm = this.fb.group({
      service: ['0'],
      searchText: [''],
    });
  }
  onChangeService(e: any) {}
  goToServicePage() {
    const searchText = this.searchForm.get('searchText')?.value;

    if (searchText) {
      this.router.navigate(['/search'], {
        queryParams: { doctorname: searchText },
      });
    } else {
      this.router.navigate(['/search']);
      // Handle the case where searchText is undefined or falsy.
      // You might want to show an error message or take appropriate action.
    }
  }
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      speed: 1500,
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
      },
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
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

    this.swiper = new Swiper('.service', {
      speed: 2000,
      spaceBetween: 0,
      slidesPerView: 2,

      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      },
    });
  }

  getPlatformList() {
    this.PlatformFacilityService.getServiceList().subscribe({
      next: (res) => {
        this.serviceList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
