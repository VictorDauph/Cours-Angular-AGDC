import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-customer-form-template-driven',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form-template-driven.component.html',
  styleUrl: './customer-form-template-driven.component.css'
})
export class CustomerFormTemplateDrivenComponent {
  customer: Customer = new Customer(0, '', '', 0); // Modèle initial

  onSubmit(form: any): void {
    if (form.valid) {
      //Lien direct entre les champs du formulaire et les attributs de newCustomer
      const newCustomer = new Customer(
        form.value.id,
        form.value.nom,
        form.value.address,
        form.value.age
      );
      console.log('Nouveau client créé :', newCustomer);
      form.reset(); // Réinitialise le formulaire
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
