import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'list', // URL interne du module pour afficher le composant
    component: CustomerListComponent,
    pathMatch: 'full' // Redirection ou correspondance complète pour la racine
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
