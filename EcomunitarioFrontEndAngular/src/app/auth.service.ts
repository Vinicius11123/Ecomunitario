// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login() {
    // Perform authentication logic here
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    // Perform logout logic here
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}
