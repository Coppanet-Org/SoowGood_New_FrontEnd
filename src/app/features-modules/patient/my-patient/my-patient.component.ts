import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.scss'],
})
export class MyPatientComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
