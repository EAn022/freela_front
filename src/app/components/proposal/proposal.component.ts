import { Component } from '@angular/core';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [NavbarClienteComponent],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {

}
