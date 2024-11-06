import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  senha: string = '';
  mostrarTexto = false;

  mostrar_senha(): void {
    this.mostrarTexto = true;
  }
  ocultar_senha(): void{
    this.mostrarTexto = false;
  }
}