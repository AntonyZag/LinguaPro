import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LinguaproService } from '../../services/linguapro';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion.html',
  styleUrl: './inscripcion.css'
})
export class Inscripcion {
  private linguaService = inject(LinguaproService);

  inscripciones = this.linguaService.inscripciones;

  formData = {
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    idiomaInteres: '',
    nivel: ''
  };

  guardarInscripcion(form: NgForm): void {
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor complete todos los campos obligatorios antes de continuar.',
        confirmButtonColor: '#0d6efd'
      });
      return;
    }

    this.linguaService.agregarInscripcion({
      nombres: this.formData.nombres.trim(),
      apellidos: this.formData.apellidos.trim(),
      correo: this.formData.correo.trim(),
      telefono: this.formData.telefono.trim(),
      idiomaInteres: this.formData.idiomaInteres,
      nivel: this.formData.nivel
    });

    Swal.fire({
      icon: 'success',
      title: '¡Inscripción Exitosa!',
      text: `El registro de ${this.formData.nombres} ha sido guardado.`,
      confirmButtonColor: '#198754',
      timer: 2500
    });

    form.resetForm();
    this.formData = {
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      idiomaInteres: '',
      nivel: ''
    };
  }

  eliminar(id: number, nombres: string): void {
    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se retirará a ${nombres} de la lista.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((res) => {
      if (res.isConfirmed) {
        this.linguaService.eliminarInscripcion(id);
        Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: 'Registro eliminado con éxito.',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }
}