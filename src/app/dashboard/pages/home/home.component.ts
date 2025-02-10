import { Component } from '@angular/core';
import { SidebarMobileComponent } from '../../components/sidebar-mobile/sidebar-mobile.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [SidebarMobileComponent, RouterOutlet, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
