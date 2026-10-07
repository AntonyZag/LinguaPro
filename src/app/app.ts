import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Institucional } from './components/institucional/institucional';
import { Catalogo } from './components/catalogo/catalogo';
import { Inscripcion } from './components/inscripcion/inscripcion';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Navbar,Institucional,Catalogo,Inscripcion,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LinguaPro');
}
