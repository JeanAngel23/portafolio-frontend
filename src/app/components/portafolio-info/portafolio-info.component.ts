import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portafolio-info',
  imports: [CommonModule,CommonModule,

  ],
  templateUrl: './portafolio-info.component.html',
  styleUrl: './portafolio-info.component.css',
  
})
export class PortafolioInfoComponent {

  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
