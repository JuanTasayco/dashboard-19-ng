import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
