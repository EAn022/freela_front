import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-nova-postagem-cliente',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './nova-postagem-cliente.component.html',
  styleUrl: './nova-postagem-cliente.component.scss'
})
export class NovaPostagemClienteComponent {

}
