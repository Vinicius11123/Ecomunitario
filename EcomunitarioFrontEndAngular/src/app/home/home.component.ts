import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
