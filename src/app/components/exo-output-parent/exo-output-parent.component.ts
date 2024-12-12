import { Component } from '@angular/core';
import { ExoOutputEnfantComponent } from '../exo-output-enfant/exo-output-enfant.component';

@Component({
  selector: 'app-exo-output-parent',
  imports: [ExoOutputEnfantComponent],
  templateUrl: './exo-output-parent.component.html',
  styleUrl: './exo-output-parent.component.css'
})
export class ExoOutputParentComponent {
  titleContent = "exo-output-parent works!";
  receiveMessage(message: string) {
    this.titleContent = message;
  }
}
