import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  registerUser() {
    this.authService.register(this.user).subscribe(
      response => {
        alert("User Registered Successfully");
        this.user = { name: '', email: '', password: '' };
      },
      error => {
        console.error(error);
      alert("Error creating user");
      }
    );
  }

}
