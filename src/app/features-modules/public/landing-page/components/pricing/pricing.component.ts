import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  packages = [
    {
      name: 'Bronze',
      facilities: [
        '1 Free Doctor Consultation- General Practitioner',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
      ],
      price: {
        monthly: 150,
        quarterly: 500,
        halfYearly: 900,
      },
      condition: 'Subscription based, but no auto-renew option',
    },
    {
      name: 'Silver',
      facilities: [
        '2 Free Doctor Consultations- General Practitioner',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
        'Discount on Partner Hospital Service',
      ],
      price: {
        monthly: 250,
        quarterly: 950,
        halfYearly: 1800,
      },
      condition: 'Subscription based, but no auto-renew option',
    },
    {
      name: 'Gold',
      facilities: [
        '3 Free Doctor Consultations- 2 General Practitioners and 1 Specialist Doctor',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
        'Discount on Partner Hospital Service',
        'Hospital Cashback up to BDT 1,00,000',
      ],
      price: {
        monthly: 353,
        quarterly: 1059,
        halfYearly: 2118,
        yearly: 4235,
      },
      condition: 'Subscription based, has auto-renew option',
    },
    {
      name: 'Platinum',
      facilities: [
        '3 Free Doctor Consultations- 2 General Practitioners and 1 Specialist Doctor',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
        'Discount on Partner Hospital Service',
        'Hospital Cashback up to BDT 20,000',
        'Out Patient Benefit up to BDT 2,000',
      ],
      price: {
        monthly: 445,
        quarterly: 1334,
        halfYearly: 2667,
        yearly: 5334,
      },
      condition: 'Subscription based, has auto-renew option',
    },
    {
      name: 'Diamond',
      facilities: [
        '4 Free Doctor Consultations- 2 General Practitioners and 2 Specialist Doctors',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
        'Discount on Partner Hospital Service',
        'Hospital Cashback up to BDT 50,000',
        'Natural Death Coverage up to BDT 2,00,000',
      ],
      price: {
        monthly: 794,
        quarterly: 2382,
        halfYearly: 4764,
        yearly: 9527,
      },
      condition: 'Subscription based, has auto-renew option',
    },
    {
      name: 'Titanium',
      facilities: [
        '4 Free Doctor Consultations- 2 General Practitioners and 2 Specialist Doctors',
        'Discount on Partner Diagnostic Test',
        'Discount on Medicine Purchase',
        'Discount on Home Sample Collection',
        'Discount on Partner Hospital Service',
        'Hospital Cashback up to BDT 50,000',
        'Permanent Total Disability- PTD & Permanent Partial Disability- PPD Coverage (1st Schedule) up to BDT 2,50,000',
        'Natural Death Coverage up to BDT 2,50,000',
        'Accidental Death Coverage up to BDT 5,00,000',
      ],
      price: {
        monthly: 993,
        quarterly: 2979,
        halfYearly: 5958,
        yearly: 11916,
      },
      condition: 'Subscription based, has auto-renew option',
    },
  ];
}
