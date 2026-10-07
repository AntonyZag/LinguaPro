import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Institucional } from './components/institucional/institucional';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { Footer } from './components/footer/footer';
import { InscripcionComponent } from './components/inscripcion/inscripcion';

@Component({
  imports: [RouterOutlet, Navbar,Institucional,CatalogoComponent, InscripcionComponent,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LinguaPro');
}
