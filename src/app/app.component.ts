import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {
  isAuthenticated: boolean = false;
  activeTab: string = 'projects'; // Pestaña activa por defecto

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.checkAuthentication();
  }

  checkAuthentication() {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta este código en el navegador
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  navigateTo(tab: string): void {
    this.activeTab = tab; // Cambiar la pestaña activa
    this.router.navigate([`/${tab}`]); // Navegar al endpoint correspondiente
  }
}
