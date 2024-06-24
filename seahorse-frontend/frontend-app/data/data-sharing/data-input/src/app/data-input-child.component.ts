import { Component, Input } from '@angular/core';




@Component({
  selector: 'data-input-child',
  standalone: true,
  template: `
    <div>
      <h5>Data Input Child Component</h5>
      <p>The child item is: {{childItem}}</p>
    </div>
  `
})
export class DataInputChildComponent {
  @Input() childItem: string = "pepe";
}