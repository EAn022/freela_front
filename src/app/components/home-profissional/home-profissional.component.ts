import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-home-profissional',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './home-profissional.component.html',
  styleUrl: './home-profissional.component.scss'
})
export class HomeProfissionalComponent {
  currentLink: string = 'home'; // Inicialmente, 'home' é o ativo

  setActive(link: string) {
    this.currentLink = link;
  }
}
