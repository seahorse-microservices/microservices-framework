import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  template: `
    <br/>
    <br/>
    <br/>
    <br/>
   
    <div>
     
      <button type="button" (click)="decrementClickCounter()" title="smaller">-</button>
      <button type="button" (click)="incrementClickCounter()" title="bigger">+</button>
      <p>clickCounter: {{ clickCounter }}</p>
    </div>
  `,
})
export class EventBindingComponent {
  
  clickCounter: number = 0;

  decrementClickCounter() { this.clickCounter-- }

  incrementClickCounter() { this.clickCounter++ }
}
