import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home-profissional',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home-profissional.component.html',
  styleUrl: './home-profissional.component.scss'
})
export class HomeProfissionalComponent {
  currentLink: string = 'home'; // Inicialmente, 'home' é o ativo

  setActive(link: string) {
    this.currentLink = link;
  }
}
