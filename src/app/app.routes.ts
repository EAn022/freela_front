import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { HomePageAdminComponent } from './components/home-page-admin/home-page-admin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CriarPerfilComponent } from './components/criar-perfil/criar-perfil.component';
import { NovaPostagemClienteComponent } from './components/nova-postagem-cliente/nova-postagem-cliente.component';
import { PropostasClienteComponent } from './components/propostas-cliente/propostas-cliente.component';
import { PerfilProfissionalClienteComponent } from './perfil-profissional-cliente/perfil-profissional-cliente.component';
import { HomePageClienteComponent } from './components/home-page-cliente/home-page-cliente.component';

export const routes: Routes = [
   
    {path: '', component: LandingPageComponent},
    {path: 'login', component:  LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'perfil', component: CriarPerfilComponent},
    //Profissional
    {path: 'home/profissional', component: HomeProfissionalComponent},
    // Admin
    {path: 'gerenciamento', component: GerenciamentoComponent},
    {path: 'home/admin', component: HomePageAdminComponent},
    // Cliente
    {path: 'home/cliente', component: HomePageClienteComponent},
    {path: 'post', component: NovaPostagemClienteComponent},
    {path: 'propostas', component: PropostasClienteComponent},
    {path: 'perfilProfissional', component: PerfilProfissionalClienteComponent},

    {path: '**', redirectTo: ''}
];
