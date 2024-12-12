import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/dataService/data-service.service';
import { Customer } from '../../../models/Customer';


@Component({
  selector: 'app-customer-form-reactive',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form-reactive.component.html',
  styleUrl: './customer-form-reactive.component.css'
})
export class CustomerFormReactiveComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataServiceService) {
    /* Initialisation du formulaire avec FormBuilder
    Les Validators sont les contrôles fait sur le formulaire,
    On peut créer un Validator personnalisé
    */
    this.customerForm = this.fb.group({
      id: [0, [Validators.required]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit(): void {
    //Si le formulaire est valide on récupère les valeurs pour créer un customer
    if (this.customerForm.valid) {
      const formValue = this.customerForm.value;
      const newCustomer = new Customer(
        formValue.id,
        formValue.nom,
        formValue.address,
        formValue.age
      );
      console.log('Nouveau client créé :', newCustomer);
      this.dataService.addCustomer(newCustomer);
      //this.customerForm.reset(); // Réinitialise le formulaire
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
