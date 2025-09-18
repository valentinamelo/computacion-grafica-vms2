import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.html',
    styleUrl: './date-picker.css',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerApp {
    date: Date | undefined;
}