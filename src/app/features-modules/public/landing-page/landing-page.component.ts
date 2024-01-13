import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  model: any;
  ngOnInit() {
    this.model = {
      firstname: {
        type: 'text',
        value: '',
        label: 'FirstName',
        rules: {
          required: true,
        },
      },
      lastname: {
        type: 'text',
        value: '',
        label: 'LastName',
        rules: {
          required: true,
        },
      },
      address: {
        type: 'text',
        value: '',
        label: 'Address',
        rules: {
          required: true,
        },
      },
      age: {
        type: 'number',
        value: '',
        label: 'age',
        rules: {
          required: true,
        },
      },
      birthDay: {
        type: 'date',
        value: '',
        label: 'Birthday',
        rules: {
          required: true,
        },
      },
    };
  }


}
