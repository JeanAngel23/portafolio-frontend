import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  standalone: true, // Convertirlo en standalone
  imports: [CommonModule], // Agregar CommonModule aquí
})
export class ContactInfoComponent implements OnInit {
  contacts: Contact | null = null; // Asegúrate de que el tipo Contact coincide con el backend

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Puedes cargar los contactos automáticamente al inicializar el componente
    // o dejarlo para el método manualmente con el botón
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.contacts = data; // Aquí data debe ser un Contact válido
      },
      error: (err) => {
        console.error('Error al cargar los contactos:', err);
        this.contacts = null;
      },
    });
  }
}







