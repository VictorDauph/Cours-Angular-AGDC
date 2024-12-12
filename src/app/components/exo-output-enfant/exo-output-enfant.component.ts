import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exo-output-enfant',
  imports: [],
  templateUrl: './exo-output-enfant.component.html',
  styleUrl: './exo-output-enfant.component.css'
})
export class ExoOutputEnfantComponent {
  @Output() sendMessage = new EventEmitter<string>();

  sendToParent(): void {
    this.sendMessage.emit("Bonjour depuis l'enfant");
  }
}
