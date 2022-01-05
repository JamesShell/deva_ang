import { Component, OnInit } from '@angular/core';
import { payments, PaymentType } from 'src/app/auth/components/register/paymentTypes';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  payments:PaymentType[] = payments;
  constructor() { }

  ngOnInit(): void {
  }

}
