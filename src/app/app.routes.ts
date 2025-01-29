import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { authGuard } from './guards/auth.guard';
import { SkillsInfoComponent } from './components/skills-info/skills-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { PortafolioInfoComponent } from './components/portafolio-info/portafolio-info.component';
import { ViewProyectComponent } from './components/view-proyect/view-proyect.component';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' // Redirige a la ruta de login si la ruta está vacía
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'projects', 
    component: ProjectListComponent, 
    canActivate: [authGuard] // Protege la ruta con el guard de autenticación
  },
  {
    path: 'view-projects', 
    component: ViewProyectComponent, 
    canActivate: [authGuard] // Protege la ruta con el guard de autenticación
  },
  { 
    path: 'skills', 
    component: SkillsInfoComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'contact', 
    component: ContactInfoComponent, 
    canActivate: [authGuard] 
  },
  {
    path: 'portafolio', 
    component: PortafolioInfoComponent, 
    // No se añade el `authGuard` aquí para que no herede lógica de autenticación (opcional)
  },
  { 
    path: '**', 
    redirectTo: '/login', 
    pathMatch: 'full' // Redirige a login cualquier ruta no encontrada
  }
];






//import { Routes } from '@angular/router';

//export const routes: Routes = [];
