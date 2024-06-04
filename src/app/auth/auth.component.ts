import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string | undefined;
  password: string | undefined;
  isLoginMode: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login({ username: this.username, password: this.password }).subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/productos']);
      });
    } else {
      this.authService.register({ username: this.username, password: this.password }).subscribe(response => {
        this.isLoginMode = true;
      });
    }
  }
}