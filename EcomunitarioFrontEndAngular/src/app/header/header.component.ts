import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
