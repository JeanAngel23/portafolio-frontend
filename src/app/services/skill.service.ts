import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Skill {
  name: string;
  proficiencyLevel: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found in localStorage');
      return new Observable<Skill[]>(); // Retorna un observable vacío si no hay token
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Skill[]>(`${this.apiUrl}/api/skills`, { headers });
  }

}


