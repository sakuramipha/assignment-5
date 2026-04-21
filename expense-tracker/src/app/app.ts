import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker');
}
