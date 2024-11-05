import { Routes } from '@angular/router';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';
import { HomePageAdminComponent } from './components/home-page-admin/home-page-admin.component';

export const routes: Routes = [
    {path: '', component: HomeProfissionalComponent},
    {path: 'page-admin',component:HomePageAdminComponent}
];
