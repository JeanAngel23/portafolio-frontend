import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms';
import { ViewProjectService,ViewProject } from '../../services/view-project.service';


@Component({
  selector: 'app-view-proyect',
  templateUrl: './view-proyect.component.html',
  styleUrl: './view-proyect.component.css',
  standalone: true, // Convertirlo en standalone
  imports: [CommonModule, FormsModule],
})
export class ViewProyectComponent implements OnInit{
  projects: ViewProject[] = [];
    newProject: ViewProject = {
      name: '',
      description: '',
      technologies: '',
      github_url: '',
    };

    constructor(private viewProjectService : ViewProjectService ) {}
    
      ngOnInit(): void {
        this.loadProjects();
      }

loadProjects(): void {
    this.viewProjectService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error al cargar proyectos:', err),
    });
  }

  addProject(): void {
    this.viewProjectService.createProject(this.newProject).subscribe(() => {
      this.loadProjects();
      this.newProject = {
        name: '',
        description: '',
        technologies: '',
        github_url: '',
      };
    });
  }

  updateProject(project: ViewProject): void {
    if (project.id) {
      this.viewProjectService.updateProject(project.id, project).subscribe(() => {
        this.loadProjects();
      });
    }
  }

  deleteProject(id: number): void {
    this.viewProjectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
