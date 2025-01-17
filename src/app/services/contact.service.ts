import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


export interface Contact {
  email: string;
  phoneNumber: string;
  linkedinUrl: string;
  githubUrl: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact> {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Token no encontrado. Asegúrate de que el usuario esté autenticado.');
      throw new Error('No se puede realizar la solicitud: el usuario no está autenticado.');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    return this.http.get<Contact>(this.apiUrl, { headers });
  }
  
}




