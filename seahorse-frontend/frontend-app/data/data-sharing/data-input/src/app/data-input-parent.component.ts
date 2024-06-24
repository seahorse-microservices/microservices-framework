import { Component } from '@angular/core';
import { DataInputChildComponent } from './data-input-child.component';




@Component({
  selector: 'data-input-parent',
  standalone: true,
  imports: [DataInputChildComponent],
  template: `
    <div>
      <data-input-child [childItem]="parentItem"></data-input-child>
    </div>
  `
})
export class DataInputParentComponent {

    parentItem: string = "this data comes from the parent component";
}