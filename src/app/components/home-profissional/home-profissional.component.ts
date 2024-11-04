import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardServicesComponent } from '../card-services/card-services.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { ProposalComponent } from '../proposal/proposal.component';


@Component({
  selector: 'app-home-profissional',
  standalone: true,
  imports: [
    NavbarComponent,
    CardServicesComponent,
    MyProfileComponent,
    ProposalComponent
  ],
  templateUrl: './home-profissional.component.html',
  styleUrl: './home-profissional.component.scss'
})
export class HomeProfissionalComponent {
  currentLink: string = 'perfil'; // Inicialmente, 'home' é o ativo

  setActive(link: string) {
    this.currentLink = link;
  }
}
