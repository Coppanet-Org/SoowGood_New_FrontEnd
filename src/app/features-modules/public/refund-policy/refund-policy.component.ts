import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.scss'],
})
export class RefundPolicyComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
