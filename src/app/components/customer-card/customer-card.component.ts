import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-customer-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css'
})
export class CustomerCardComponent {
  @Input() customer: Customer = {} as Customer;
}
