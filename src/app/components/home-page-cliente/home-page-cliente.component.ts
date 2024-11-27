import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';
import { MeuPerfilClienteComponent } from '../meu-perfil-cliente/meu-perfil-cliente.component';
import { PropostasClienteComponent } from '../propostas-cliente/propostas-cliente.component';

@Component({
  selector: 'app-home-page-cliente',
  standalone: true,
  imports: [NavbarClienteComponent, MeuPerfilClienteComponent, PropostasClienteComponent],
  templateUrl: './home-page-cliente.component.html',
  styleUrl: './home-page-cliente.component.scss'
})
export class HomePageClienteComponent {
  currentLink: string = 'meuperfil';

  setActive(link: string) {
    this.currentLink = link;
  }

}
