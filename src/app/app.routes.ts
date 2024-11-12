import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { HomePageAdminComponent } from './components/home-page-admin/home-page-admin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';

export const routes: Routes = [
   
    {path: '', component: HomePageAdminComponent},
    {path: 'gerenciamento', component: GerenciamentoComponent},
    {path: '**', redirectTo: ''}
];
