import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingModalComponent } from './pricing-modal/pricing-modal.component';

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
        monthly: '150 tk',
        quarterly: ' 500 tk.',
        halfYearly: ' 900 tk.',
        yearly: 'Not Available',
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
        monthly: '250 tk',
        quarterly: '950 tk.',
        halfYearly: '1800 tk.',
        yearly: 'Not Available',
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
        monthly: '353 tk',
        quarterly: '1059 tk.',
        halfYearly: '2118 tk.',
        yearly: '4235 tk.',
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
        monthly: '445 tk',
        quarterly: '1334 tk.',
        halfYearly: '2667 tk.',
        yearly: '5334 tk.',
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
        monthly: '794 tk',
        quarterly: '2382 tk.',
        halfYearly: '4764 tk.',
        yearly: '9527 tk.',
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
        monthly: '993 tk',
        quarterly: '2979 tk.',
        halfYearly: '5958 tk.',
        yearly: '11916 tk.',
      },
      condition: 'Subscription based, has auto-renew option',
    },
  ];
  constructor(public dialog: MatDialog) {}
  comparePrice() {
    const dialogRef = this.dialog.open(PricingModalComponent, {
      data: 'compare',
    });
  }
}
