import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { HomePageAdminComponent } from './components/home-page-admin/home-page-admin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { MyProposalComponent } from './components/my-proposal/my-proposal.component';

export const routes: Routes = [
   
    {path: '', component: LandingPageComponent},
    {path: 'login', component:  LoginComponent},
    {path: 'register', component: CadastroComponent},
    {path: 'home/profissional', component: HomeProfissionalComponent},
    {path: 'admin/home', component: HomePageAdminComponent},
    {path: 'admin/gerenciamento', component: GerenciamentoComponent},
    {path: 'profile', component: MyProfileComponent},
    {path: 'proposal/create', component: ProposalComponent},
    {path: 'profile/my-proposal', component: MyProposalComponent}
];
