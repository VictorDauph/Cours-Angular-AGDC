import { Routes } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { ExoOutputParentComponent } from './components/exo-output-parent/exo-output-parent.component';
import { BehaviorDemoComponent } from './components/behavior-demo/behavior-demo.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerFormTemplateDrivenComponent } from './components/customer-form-template-driven/customer-form-template-driven.component';
import { CustomerFormReactiveComponent } from './components/customer-form-reactive/customer-form-reactive.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ExemplePipesComponent } from './components/exemple-pipes/exemple-pipes.component';


export const routes: Routes = [
    {
        path: '', // Chemin racine
        component: Comp1Component,
        pathMatch: 'full' // Redirection ou correspondance complète pour la racine
    },
    {
        path: 'httpClient', // Chemin racine
        component: HttpClientComponent,
        pathMatch: 'full' // Redirection ou correspondance complète pour la racine
    },
    {
        path: 'exoOutput', // Chemin racine
        component: ExoOutputParentComponent,
        pathMatch: 'full' // Redirection ou correspondance complète pour la racine
    },
    {
        path: 'BehaviorDemo', // Chemin racine
        component: BehaviorDemoComponent,
        pathMatch: 'full' // Redirection ou correspondance complète pour la racine
    },
    {
        path: 'about', // Chemin pour la page "About"
        component: AboutComponent
    },
    {
        path: 'pipes', // Chemin pour la page "About"
        component: ExemplePipesComponent
    },
    {
        path: 'customersModule',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },
    {
        path: 'customers',
        loadComponent: () => import('./components/customer-list-standalone/customer-list-standalone.component').then(c => c.CustomerListStandaloneComponent)
    },
    { path: 'customer/new', component: CustomerFormTemplateDrivenComponent },
    { path: 'customer/newReactiveForm', component: CustomerFormReactiveComponent },
    { path: 'customer/:id', component: CustomerProfileComponent },

    {
        path: '**', // Correspond à toutes les routes non définies
        component: NotFoundComponent
    }
];
