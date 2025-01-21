import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id?: number;
  name: string;
  description: string;
  technologies: string;
  github_url: string;
  isEditing?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token no encontrado. Asegúrate de que el usuario esté autenticado.');
      throw new Error('No se puede realizar la solicitud: el usuario no está autenticado.');
    }
  
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<Project[]>(this.apiUrl, { headers });
  }

  createProject(project: Project): Observable<Project> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post<Project>(this.apiUrl, project, { headers });
  }

  updateProject(id: number, project: Project): Observable<Project> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project, { headers });
  }

  deleteProject(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}

