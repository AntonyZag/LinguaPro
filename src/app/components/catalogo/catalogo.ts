import { Component, inject } from '@angular/core';
import { LinguaproService } from '../../services/linguapro';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent {
  private linguaService = inject(LinguaproService);

  // Señales consumidas desde el servicio
  cursos = this.linguaService.cursos;
  docentes = this.linguaService.docentes;
  promociones = this.linguaService.promociones;
  resenas = this.linguaService.resenas;
}