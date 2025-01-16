import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { authGuard } from './guards/auth.guard';
import { SkillsInfoComponent } from './components/skills-info/skills-info.component'; // Ajuste para Skills
import { ContactInfoComponent } from './components/contact-info/contact-info.component'; // Ajuste para Contact

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta inicial por defecto
  { path: 'login', component: LoginComponent }, // Componente de login
  { 
    path: 'projects', 
    component: ProjectListComponent, 
    canActivate: [authGuard], // Protección con guard
  },
  { 
    path: 'skills', 
    component: SkillsInfoComponent, // Componente de habilidades
    canActivate: [authGuard], // Protección con guard
  },
  { 
    path: 'contact', 
    component: ContactInfoComponent, // Componente de contacto
    canActivate: [authGuard], // Protección con guard
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Ruta wildcard para rutas no encontradas
];





//import { Routes } from '@angular/router';

//export const routes: Routes = [];
