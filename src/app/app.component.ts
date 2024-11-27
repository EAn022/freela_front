import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarClienteComponent } from './components/navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freela_front';
}
