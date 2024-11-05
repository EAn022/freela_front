import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home-page-admin',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home-page-admin.component.html',
  styleUrl: './home-page-admin.component.scss'
})
export class HomePageAdminComponent {

}
