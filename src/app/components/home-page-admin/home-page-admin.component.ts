import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-home-page-admin',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './home-page-admin.component.html',
  styleUrl: './home-page-admin.component.scss'
})
export class HomePageAdminComponent {

}
