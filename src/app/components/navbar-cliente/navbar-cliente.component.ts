import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-cliente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-cliente.component.html',
  styleUrl: './navbar-cliente.component.scss'
})
export class NavbarClienteComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
