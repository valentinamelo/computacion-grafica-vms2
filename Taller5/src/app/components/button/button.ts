import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonComponent { }