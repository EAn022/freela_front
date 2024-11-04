import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLink: string = 'home'; // Inicialmente, o link 'home' é o ativo

  @Output() activeLinkChange = new EventEmitter<string>();

  // Método para mudar o link ativo
  setActive(link: string) {
    this.currentLink = link;
    this.activeLinkChange.emit(link); // Emite o link ativo
  }

  

}
