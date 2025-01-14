import { Component } from '@angular/core';
import { ConversorComponent } from './conversor/conversor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConversorComponent],
  template: '<app-conversor></app-conversor>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
