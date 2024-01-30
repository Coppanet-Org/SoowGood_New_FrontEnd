import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  serviceDetails!: any[];
  ngOnInit(): void {
    this.serviceDetails = [
      {
        title: 'Ambulance Service',
        img: '/assets/banner/ambulance.png',
        link: 'ambulance-service',
      },
      {
        title: 'Diagnostic Center',
        img: '/assets/banner/diagn.png',
        link: 'diagnostic-center',
      },
      {
        title: 'Order Medicine',
        img: '/assets/banner/medicine.png',
        link: 'order-medicine',
      },
      {
        title: 'Book Hospital',
        img: '/assets/banner/hospital.webp',
        link: 'book-hospital',
      },
      {
        title: 'Medical Service',
        img: '/assets/banner/product.png',
        link: 'medical-service',
      },
      {
        title: 'Donate or get Blood',
        img: '/assets/banner/donate.jpg',
        link: 'donate-or-get-blood',
      },
      {
        title: 'Medical Test',
        img: '/assets/banner/spe.png',
        link: 'medical-test',
      },
    ];
  }
}
