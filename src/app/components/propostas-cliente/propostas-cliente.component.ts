import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-propostas-cliente',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './propostas-cliente.component.html',
  styleUrl: './propostas-cliente.component.scss'
})
export class PropostasClienteComponent {

}
