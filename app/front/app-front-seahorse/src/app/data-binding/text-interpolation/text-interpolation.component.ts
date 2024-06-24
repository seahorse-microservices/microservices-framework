import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  standalone: true,
  template: `
    <div>
      <h3>{{ title }}</h3>
    </div>
  `,
})
export class TextInterpolationComponent {
  title = 'This is the text interpolation';
}
