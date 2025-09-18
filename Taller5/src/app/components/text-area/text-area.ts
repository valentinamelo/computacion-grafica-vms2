import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-area',
    templateUrl: './text-area.html',
    styleUrl: './text-area.css',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class TextareaApp {
    value!: string;
}