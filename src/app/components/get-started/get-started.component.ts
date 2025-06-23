import { Component } from '@angular/core';
import { LineComponent } from '../line/line.component';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [LineComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
})
export class GetStartedComponent {}
