import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template } from './template/template';

@Component({
  selector: 'app-root',
  imports: [Template, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lab';

}
