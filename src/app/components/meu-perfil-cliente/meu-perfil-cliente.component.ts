import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';
import { CriarPerfilComponent } from '../criar-perfil/criar-perfil.component';

@Component({
  selector: 'app-meu-perfil-cliente',
  standalone: true,
  imports: [NavbarClienteComponent, CriarPerfilComponent],
  templateUrl: './meu-perfil-cliente.component.html',
  styleUrl: './meu-perfil-cliente.component.scss'
})
export class MeuPerfilClienteComponent {
  descricao: string = '';
}
