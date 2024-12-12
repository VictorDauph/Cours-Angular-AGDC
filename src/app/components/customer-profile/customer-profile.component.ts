import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerListStandaloneComponent } from '../customer-list-standalone/customer-list-standalone.component';
import { Customer } from '../../../models/Customer';
import { customerListStatic } from '../../shared/customerList';

@Component({
  selector: 'app-customer-profile',
  imports: [],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent {
  id: number | null = null;
  constructor(private route: ActivatedRoute, private router: Router) { }
  customer: Customer = {} as Customer;

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);
    let custResult = customerListStatic.find((customer: Customer) => customer.id === this.id);
    if (custResult != null && custResult != undefined) {
      this.customer = custResult;
    }
  }

  goToCustomers() {
    this.router.navigate(['/customers']);
  }
}


