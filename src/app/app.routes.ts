import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component:  LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'home/profissional', component: HomeProfissionalComponent}
];
