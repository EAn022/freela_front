import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeProfissionalComponent } from './components/home-profissional/home-profissional.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home/profissional', component: HomeProfissionalComponent}
];
