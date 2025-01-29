import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ViewProject {
  id?: number;
  name: string;
  description: string;
  technologies: string;
  github_url: string;
  isEditing?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ViewProjectService {
  private apiUrl = 'http://localhost:8080/api/view-projects'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ViewProject[]> {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token no encontrado. Asegúrate de que el usuario esté autenticado.');
        throw new Error('No se puede realizar la solicitud: el usuario no está autenticado.');
      }
    
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<ViewProject[]>(this.apiUrl, { headers });
    }
  
    createProject(project: ViewProject): Observable<ViewProject> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.post<ViewProject>(this.apiUrl, project, { headers });
    }
  
    updateProject(id: number, project: ViewProject): Observable<ViewProject> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.put<ViewProject>(`${this.apiUrl}/${id}`, project, { headers });
    }
  
    deleteProject(id: number): Observable<void> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
    }

}
