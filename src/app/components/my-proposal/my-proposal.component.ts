import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-my-proposal',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './my-proposal.component.html',
  styleUrl: './my-proposal.component.scss'
})
export class MyProposalComponent {

}
