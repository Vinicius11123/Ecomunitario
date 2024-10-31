import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ArtemisFrontEnd';
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
