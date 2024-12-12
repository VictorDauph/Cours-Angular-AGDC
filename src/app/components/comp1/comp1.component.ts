import { Component } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
import { Customer } from '../../../models/Customer';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { RouterLink } from '@angular/router';
import { customerListStatic } from '../../shared/customerList';

@Component({
  selector: 'app-comp1',
  imports: [Comp2Component, FormsModule, RouterLink],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  text = "go to customers standalone component"
  customers: Array<Customer> = customerListStatic;

  isHighlighted = false;

  username = 'Alice';

  // Méthode appelée lors du clic
  logText(textFromHtml: string): void {
    console.log(textFromHtml);
  }

  greet(name: string): string {
    return "Hello, " + name;
  }

  ngOnInit() {
    console.log("initialisation du composant");
    function addition(a: number, b: number): number {
      return a + b;
    }

    console.log(addition(3, 4));
  }

  handleClose(event: Event) {
    let childElement = event.currentTarget as HTMLElement;
    childElement.classList.add("closed");
  }

  toggleIsHighLighted() {
    this.isHighlighted = !this.isHighlighted;
  }
}


