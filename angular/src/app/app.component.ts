import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar, MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
