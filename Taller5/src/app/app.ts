import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button'
import { SelectList } from './components/select-list/select-list';
import { DatePickerApp } from './components/date-picker/date-picker';
import { InputTextApp } from './components/input-text/input-text';
import { MenubarApp } from './components/menubar/menubar';
import { RadioButtonApp } from './components/radio-button/radio-button';
import { RatingApp } from './components/rating/rating';
import { SelectButtonApp } from './components/select-button/select-button';
import { TextareaApp } from './components/text-area/text-area';
import { ToastApp } from './components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    ButtonComponent,
    SelectList,
    DatePickerApp,
    InputTextApp,
    MenubarApp,
    RadioButtonApp,
    RatingApp,
    SelectButtonApp,
    TextareaApp,
    ToastApp
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Taller5');
}
