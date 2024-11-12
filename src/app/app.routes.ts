import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { HomePageAdminComponent } from './components/home-page-admin/home-page-admin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
   
    {path: '', component: LandingPageComponent},
    {path: 'login', component:  LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'gerenciamento', component: GerenciamentoComponent},
    {path: 'home/profissional', component: HomeProfissionalComponent},
    {path: 'home/admin', component: HomePageAdminComponent},
    {path: '**', redirectTo: ''}
];
