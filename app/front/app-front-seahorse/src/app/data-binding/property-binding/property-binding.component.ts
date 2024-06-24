import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  template: `
    <div>
      <hr />
      <p>Property Binding</p>
      <p>Change the input and see the differences!!!</p>

      <hr />

      <div (keyup)="(0)">
        <div>
          
          <label for="html-attr">
            <input id="html-attr" type="text" [value]="inputValue" #bindingInput2 />
          </label>
          
          <p>{{ bindingInput2.value }}</p>
        </div>
      </div>
    </div>
  `,
})
export class PropertyBindingComponent {
  inputValue = 'miguel';
}
