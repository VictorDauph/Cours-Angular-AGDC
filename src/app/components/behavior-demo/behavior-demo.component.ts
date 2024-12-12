import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-behavior-demo',
  imports: [],
  templateUrl: './behavior-demo.component.html',
  styleUrl: './behavior-demo.component.css'
})
export class BehaviorDemoComponent {

  behaviorSubject = new BehaviorSubject<string>("Start");

  observable = new Observable((observer) => {
    observer.next('Valeur 1');
    observer.next('Valeur 2');
    observer.complete();
  });

  ngOnInit() {
    this.behaviorSubject.subscribe(text => console.log(text))

    this.behaviorSubject.next("1")
    this.behaviorSubject.next("2")
    this.behaviorSubject.next("3")
    this.behaviorSubject.subscribe(text => console.log(text))
    this.behaviorSubject.next("4")
    this.behaviorSubject.next("5")

    this.observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable terminé'),
    });

    this.observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable terminé'),
    });
  }
}
