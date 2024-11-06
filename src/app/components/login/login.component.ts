import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  mostrarTexto = false;

  toggleSenha(): void {
    this.mostrarTexto = !this.mostrarTexto;
    this.passwordInput.nativeElement.type = this.mostrarTexto ? 'text' : 'password';
  }
}
