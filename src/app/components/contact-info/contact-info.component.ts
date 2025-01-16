import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, Contact } from '../../services/contact.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule
})
export class ContactInfoComponent implements OnInit {
  contact: Contact | null = null;
  errorMessage: string | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContactInfo().subscribe({
      next: (data) => (this.contact = data),
      error: (err) => (this.errorMessage = 'Error al cargar la información'),
    });
  }
}


