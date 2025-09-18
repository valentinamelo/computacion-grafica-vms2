import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingApp {
    value!: number;
}