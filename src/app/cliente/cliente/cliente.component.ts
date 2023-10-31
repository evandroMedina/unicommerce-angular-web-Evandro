import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  nome: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;

  constructor(private clienteService: ClienteService) {
   }

  cadastrarCliente(){
    this.clienteService.criarCliente(this.novoCliente).subscribe(
    (clienteCriado) => {
      console.log('Cliente criado com sucesso:', clienteCriado);
      this.novoCliente = {}; // Limpa o formulário após o cadastro
    },

    (error) => {
      console.error('Erro ao criar cliente:', error);
    }
  );
  }

  novoCliente: any = {};

  ngOnInit() {
  }

}
