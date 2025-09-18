import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.html',
    styleUrl: './input-text.css',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextApp {
    value: string | undefined;
}