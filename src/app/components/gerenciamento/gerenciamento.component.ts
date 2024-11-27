import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-gerenciamento',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './gerenciamento.component.html',
  styleUrl: './gerenciamento.component.scss'
})
export class GerenciamentoComponent {

}
