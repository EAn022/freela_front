import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';


@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

}
