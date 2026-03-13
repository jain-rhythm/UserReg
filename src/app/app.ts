
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UserRegistration');
}
