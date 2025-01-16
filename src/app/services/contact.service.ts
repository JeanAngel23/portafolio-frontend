import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la interfaz para representar la respuesta del backend
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
  private apiUrl = 'http://localhost:8080/api/contact'; // URL del endpoint del backend

  constructor(private http: HttpClient) {}

  // Método para obtener la información de contacto
  getContactInfo(): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl);
  }
}

