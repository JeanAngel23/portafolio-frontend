import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';

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
  isPortafolioRoute: boolean = false; // Verifica si la ruta es '/portafolio'

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.checkAuthentication();
    this.listenToRouteChanges(); // Escucha los cambios de la ruta
  }

  // Verifica si el usuario está autenticado
  checkAuthentication() {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  }

  // Escucha cambios en la ruta para controlar la visibilidad del layout
  listenToRouteChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isPortafolioRoute = event.url.includes('/portafolio');
      });
  }

  // Maneja el logout del usuario
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  // Cambia la pestaña activa y navega al endpoint correspondiente
  navigateTo(tab: string): void {
    this.activeTab = tab; // Cambiar la pestaña activa
    this.router.navigate([`/${tab}`]); // Navegar al endpoint correspondiente
  }

  // Método para establecer manualmente la pestaña activa
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}


