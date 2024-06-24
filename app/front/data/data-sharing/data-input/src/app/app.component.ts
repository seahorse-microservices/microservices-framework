import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataInputParentComponent } from './data-input-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataInputParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-input';
}
