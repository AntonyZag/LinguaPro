import { Injectable, signal } from '@angular/core';
import { Curso, Docente, Resena, Promocion, Inscripcion } from '../models/linguapro';

@Injectable({
  providedIn: 'root'
})
export class LinguaproService {

  // Listado de cursos
  readonly cursos = signal<Curso[]>([
    { id: 1, idioma: 'Inglés', nivel: 'Básico a Avanzado (C1)', modalidad: 'Online / Presencial', duracion: '12 meses', precio: 220 },
    { id: 2, idioma: 'Portugués', nivel: 'Inicial a Intermedio (B2)', modalidad: '100% Online', duracion: '6 meses', precio: 190 },
    { id: 3, idioma: 'Francés', nivel: 'DELF A1 - B2', modalidad: 'Presencial', duracion: '9 meses', precio: 240 },
    { id: 4, idioma: 'Italiano', nivel: 'A1 a B1', modalidad: 'Híbrido', duracion: '6 meses', precio: 200 },
    { id: 5, idioma: 'Alemán', nivel: 'Goethe-Zertifikat A1-B1', modalidad: 'Online En Vivo', duracion: '10 meses', precio: 260 },
    { id: 6, idioma: 'Quechua', nivel: 'Básico a Intermedio', modalidad: 'Presencial', duracion: '4 meses', precio: 150 }
  ]);

  // Plana docente
  readonly docentes = signal<Docente[]>([
    { id: 1, nombre: 'Mg. Carlos Valdivia', especialidad: 'Inglés Académico & TOEFL', experiencia: '9 años de docencia', fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=60' },
    { id: 2, nombre: 'Lic. Sophie Laurent', especialidad: 'Francés Nativo & DELF', experiencia: '7 años de experiencia', fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60' },
    { id: 3, nombre: 'Prof. Thiago Da Silva', especialidad: 'Portugués para Negocios (Celpe-Bras)', experiencia: '6 años de experiencia', fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60' }
  ]);

  // Reseñas de estudiantes
  readonly resenas = signal<Resena[]>([
    { id: 1, estudiante: 'Andrea Rojas', idioma: 'Inglés Avanzado', calificacion: 5, comentario: 'Excelente metodología y preparación para exámenes internacionales.' },
    { id: 2, estudiante: 'Mateo Quispe', idioma: 'Portugués Intensivo', calificacion: 5, comentario: 'Docentes nativos muy pacientes y clases 100% conversacionales.' },
    { id: 3, estudiante: 'Valeria Castro', idioma: 'Francés Básico', calificacion: 5, comentario: 'Plataforma intuitiva y horarios muy accesibles para universitarios.' }
  ]);

  // Promociones vigentes
  readonly promociones = signal<Promocion[]>([
    { id: 1, titulo: 'Matrícula Cero 2026', descuento: '100% OFF', descripcion: 'Matrícula gratis por pago adelantado del primer ciclo.', vigencia: 'Hasta fin de mes' },
    { id: 2, titulo: 'Combo Bilingüe', descuento: '25% OFF', descripcion: 'Inscríbete en Inglés y lleva Portugués o Quechua con descuento.', vigencia: 'Plazas limitadas' },
    { id: 3, titulo: 'Convenio Universitario', descuento: '20% OFF', descripcion: 'Descuento permanente para estudiantes de universidades aliadas.', vigencia: 'Todo el año lectivo' }
  ]);

  // Signal del formulario para registrar y listar en tiempo real
  readonly inscripciones = signal<Inscripcion[]>([
    {
      id: 1,
      nombres: 'Gabriel',
      apellidos: 'Mendoza Pérez',
      correo: 'gmendoza@gmail.com',
      telefono: '964112233',
      idiomaInteres: 'Inglés',
      nivel: 'Básico',
      fechaRegistro: '2026-10-07'
    }
  ]);

  agregarInscripcion(nueva: Omit<Inscripcion, 'id' | 'fechaRegistro'>): void {
    const id = Date.now();
    const fechaRegistro = new Date().toISOString().split('T')[0];
    const item: Inscripcion = { id, ...nueva, fechaRegistro };
    this.inscripciones.update(actuales => [item, ...actuales]);
  }

  eliminarInscripcion(id: number): void {
    this.inscripciones.update(actuales => actuales.filter(item => item.id !== id));
  }
}