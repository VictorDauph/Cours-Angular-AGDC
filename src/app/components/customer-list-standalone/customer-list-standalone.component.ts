import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomerCardComponent } from "../customer-card/customer-card.component";
import { HighlightDirective } from "../../directives/app-highlight.directive";
import { CustomerFormReactiveComponent } from "../customer-form-reactive/customer-form-reactive.component";
import { Customer } from "../../../models/Customer";
import { DataServiceService } from "../../services/dataService/data-service.service";

@Component({
  selector: 'app-customer-list-standalone',
  imports: [CommonModule, CustomerCardComponent, HighlightDirective, CustomerFormReactiveComponent],
  templateUrl: './customer-list-standalone.component.html',
  styleUrl: './customer-list-standalone.component.css'
})
export class CustomerListStandaloneComponent {
  customerList: Customer[] = [];// = customerListStatic;


  //On injecte le service dans le constructeur
  constructor(private dataService: DataServiceService) {

  }


  ngOnInit(): void {
    // S'abonner à l'Observable pour recevoir les mises à jour
    //Les modifs de l'observable ne peuvent être prises en compte que si elles ont lieu 
    //sur la même page
    this.dataService.customerSubject.subscribe(
      array => {
        console.log("from slist component : ");
        console.log(array);
        this.customerList = array;
      }
    )
  }

}
