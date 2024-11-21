import { Component, inject } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';
import { CriarPerfilComponent } from '../criar-perfil/criar-perfil.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-perfil-cliente',
  standalone: true,
  imports: [NavbarClienteComponent, CriarPerfilComponent],
  templateUrl: './meu-perfil-cliente.component.html',
  styleUrl: './meu-perfil-cliente.component.scss'
})
export class MeuPerfilClienteComponent {
  router = inject(Router)
  descricao: string = '';

  toNovaPostagem(): void{
    this.router.navigateByUrl('/post');
  }
}
