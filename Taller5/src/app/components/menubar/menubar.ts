import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.html',
  styleUrl: './menubar.css',
  standalone: true,
  imports: [MenubarModule]
})
export class MenubarApp implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home' },
      { label: 'Galería', icon: 'pi pi-star' },
      { label: 'Buscar', icon: 'pi pi-search' },
      { label: 'Contáctanos', icon: 'pi pi-envelope' }
    ];
  }
}
