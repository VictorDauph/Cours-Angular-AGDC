import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  @Input() message: string = '';
  @Input() customer: Customer = {} as Customer;
  @Output() close = new EventEmitter<Event>();

  ngOnInit() {
    console.log("greetings from comp2 : " + this.message)
  }

  closeDetails(event: Event): void {
    this.close.emit(event);
  }
}
