import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
    standalone: true, // Convertirlo en standalone
    imports: [CommonModule, FormsModule], // Agregar CommonModule aquí
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  newProject: Project = {
    name: '',
    description: '',
    technologies: '',
    github_url: '',
  };

  constructor(private projectService: ProjectService, private router: Router) {}
  

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error al cargar proyectos:', err),
    });
  }

  navigateToAddProjects(): void {
    this.router.navigate(['/view-projects']);
  }

  addProject(): void {
    this.projectService.createProject(this.newProject).subscribe(() => {
      this.loadProjects();
      this.newProject = {
        name: '',
        description: '',
        technologies: '',
        github_url: '',
      };
    });
  }

  updateProject(project: Project): void {
    if (project.id) {
      this.projectService.updateProject(project.id, project).subscribe(() => {
        this.loadProjects();
      });
    }
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}


