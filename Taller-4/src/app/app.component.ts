import { Component } from '@angular/core';
import { ContenedorComponent } from './components/contenedor/contenedor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContenedorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller-4';
}
