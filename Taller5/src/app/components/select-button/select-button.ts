import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'app-select-button',
    templateUrl: './select-button.html',
    styleUrls: ['./select-button.css'], // <-- Corregido aquí
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonApp {
    stateOptions: any[] = [
        { label: 'Si', value: 'si' },
        { label: 'No', value: 'no' }
    ];

    value: string = 'off';
}
