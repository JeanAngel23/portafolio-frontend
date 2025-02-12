import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  private apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.http.post(`${this.apiUrl}/login`, { username, password }, { observe: 'response' })
      .subscribe({
        next: (response) => {
          console.log('Respuesta:', response);
          const body: any = response.body;
          if (body?.jwtToken) {
            // Guarda el token en localStorage
            localStorage.setItem('token', body.jwtToken);

            // Redirige a la vista de proyectos
            this.router.navigate(['/projects']);
          } else {
            console.error('No se recibió un token en la respuesta.');
          }
        },
        error: (error) => {
          console.error('Error en la petición:', error);
          this.errorMessage = `Error: ${error.message}`;
        }
      });
    } else {
      this.errorMessage = 'Por favor, llena todos los campos.';
    }
  }
}




