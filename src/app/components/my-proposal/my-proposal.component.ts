import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-my-proposal',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './my-proposal.component.html',
  styleUrl: './my-proposal.component.scss'
})
export class MyProposalComponent {

}
