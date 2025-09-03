import { Component } from '@angular/core';
import { Footer1Component } from '../footer1/footer1.component';
import { Footer2Component } from '../footer2/footer2.component';
import { Footer3Component } from '../footer3/footer3.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Footer1Component, Footer2Component, Footer3Component],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
