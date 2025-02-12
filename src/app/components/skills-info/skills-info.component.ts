import { Component, OnInit } from '@angular/core';
import { Skill, SkillService } from '../../services/skill.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-skills-info',
  templateUrl: './skills-info.component.html',
  styleUrls: ['./skills-info.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class SkillsInfoComponent implements OnInit {
  skills: Skill[] = []; // Lista de habilidades

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {}

  // Método para cargar las habilidades
  loadSkills(): void {
    this.skillService.getSkills().subscribe({
      next: (data: Skill[]) => {
        this.skills = data;
      },
      error: (err) => {
        console.error('Error al cargar las habilidades:', err);
      },
    });
  }

getWidth(proficiencyLevel: string): string {
  switch (proficiencyLevel) {
    case 'Advanced':
      return '75%'; 
    case 'Intermediate':
      return '60%'; 
    default:
      return '25%'; // Ancho predeterminado para niveles desconocidos
  }
}


getBarClass(proficiencyLevel: string): string {
  switch (proficiencyLevel) {
    case 'Advanced':
      return 'bg-success'; 
    case 'Intermediate':
      return 'bg-warning'; 
    default:
      return 'bg-secondary'; 
  }
}
}

