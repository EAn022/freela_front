import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-cliente',
  standalone: true,
  imports: [],
  templateUrl: './navbar-cliente.component.html',
  styleUrl: './navbar-cliente.component.scss'
})
export class NavbarClienteComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
