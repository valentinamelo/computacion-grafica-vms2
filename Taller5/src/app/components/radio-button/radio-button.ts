import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.html',
    styleUrl: './radio-button.css',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonApp {
    ingredient!: string;
}