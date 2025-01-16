import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Verifica si el usuario está autenticado (puedes cambiar esta lógica)
  const isAuthenticated = !!localStorage.getItem('token'); // Ejemplo usando localStorage

  if (!isAuthenticated) {
    router.navigate(['/login']); // Redirige al login si no está autenticado
    return false;
  }

  return true;
};

