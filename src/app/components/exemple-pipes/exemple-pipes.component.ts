import { Component } from '@angular/core';
import { DataServiceService } from '../../services/dataService/data-service.service';
import { Customer } from '../../../models/Customer';
import { CommonModule } from '@angular/common';
import { ExclaimPipe } from '../../pipes/exclaim.pipe';

@Component({
  selector: 'app-exemple-pipes',
  imports: [CommonModule, ExclaimPipe],
  templateUrl: './exemple-pipes.component.html',
  styleUrl: './exemple-pipes.component.css'
})
export class ExemplePipesComponent {
  customers: Customer[] = [];
  constructor(private dataService: DataServiceService) { }


  ngOnInit() {
    this.customers = this.dataService.getData();
  }
}
