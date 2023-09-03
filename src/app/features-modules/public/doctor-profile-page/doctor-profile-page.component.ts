import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss'],
})
export class DoctorProfilePageComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  active: number = 2;
  ngOnInit() {
    this.router.params.subscribe((val) => {
      if (val['para'] == 'schedule') {
        this.active = 3;
      }
    });
  }
}
