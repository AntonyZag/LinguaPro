export interface Curso {
  id: number;
  idioma: string;
  nivel: string;
  modalidad: string;
  duracion: string;
  precio: number;
}

export interface Docente {
  id: number;
  nombre: string;
  especialidad: string;
  experiencia: string;
  fotoUrl: string;
}

export interface Resena {
  id: number;
  estudiante: string;
  idioma: string;
  calificacion: number;
  comentario: string;
}

export interface Promocion {
  id: number;
  titulo: string;
  descuento: string;
  descripcion: string;
  vigencia: string;
}

export interface Inscripcion {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  idiomaInteres: string;
  nivel: string;
  fechaRegistro: string;
}