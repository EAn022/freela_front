import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  mostrarTexto = false;
  mostrarCliente = false;
  mostrarProfissional = false;
  mostrarFormularios = false;


  toggleSenha(): void {
    this.mostrarTexto = !this.mostrarTexto;
    this.passwordInput.nativeElement.type = this.mostrarTexto ? 'text' : 'password';
  }
  toggleForm(type: 'cliente' | 'profissional') {
    this.mostrarFormularios = true; 
    if (type === 'cliente') {
        this.mostrarCliente = true;
        this.mostrarProfissional = false;
    } else {
        this.mostrarProfissional = true;
        this.mostrarCliente = false;
    }
  }
}
