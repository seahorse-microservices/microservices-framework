import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  template: `
    <div>
      <br>
      <br>
      <br>
      <br>
      <input id="attribute-input" type="text" [attr.value]="inputValue"/>
    </div>
  `,
})
export class AttributeBindingComponent {
  inputValue = 'Attribute Binding';
}
