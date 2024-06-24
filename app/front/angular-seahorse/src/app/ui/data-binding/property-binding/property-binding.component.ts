import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  template: `
    <div>
      <br>
      <br>
      <br>
      <br>
      <input id="property-input" type="text" [value]="inputValue"/>
    </div>
  `,
})
export class PropertyBindingComponent {
  inputValue = 'Property Binding';
}
