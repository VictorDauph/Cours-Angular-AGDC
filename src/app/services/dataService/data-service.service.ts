import { Injectable } from '@angular/core';
import { customerListStatic } from '../../shared/customerList';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Customer } from '../../../models/Customer';

//Injectable indique qu'il s'agit d'un service, 
//une dépendance injectable dans un autre composant
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  customerList = customerListStatic;

  // BehaviorSubject pour stocker et émettre les clients
  customerSubject = new BehaviorSubject<Customer[]>(this.customerList);


  // Méthode pour ajouter un nouveau client
  addCustomer(customer: Customer): void {
    const updatedList = [...this.customerSubject.getValue(), customer];
    this.customerSubject.next(updatedList); // Émet la liste mise à jour  
  }

  constructor() { }

  getData() {
    return this.customerList;
  }
}
