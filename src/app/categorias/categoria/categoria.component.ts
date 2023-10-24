import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  nome: string;
  ativa: boolean;

  constructor(private categoriaService: CategoriaService) { 
    this.ativa = true; // A categoria é sempre criada como ativa
  }

  cadastrarCategoria(){
    this.categoriaService.criarCategoria(this.novaCategoria).subscribe(
    (categoriaCriada) => {
      console.log('Categoria criada com sucesso:', categoriaCriada);
      this.novaCategoria = {}; // Limpa o formulário após o cadastro
    },

    (error) => {
      console.error('Erro ao criar categoria:', error);
    }
  );
  }



  novaCategoria: any = {};

  ngOnInit() {
  }

}
