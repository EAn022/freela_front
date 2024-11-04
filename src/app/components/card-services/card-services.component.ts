import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss'
})
export class CardServicesComponent {
  servicos = [
    {nome: 'Joana Silva',titulo: 'Atualizar validação mysql', status: 'disponível'},
    {nome: 'Maria Ramalho',titulo: 'Deletar validação mysql', status: 'disponível'},
    {nome: 'Jonas da Mata',titulo: 'Criar validação mysql', status: 'disponível'},
  ]
  
}
