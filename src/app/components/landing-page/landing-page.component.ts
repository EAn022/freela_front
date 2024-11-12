import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',

})
export class LandingPageComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}