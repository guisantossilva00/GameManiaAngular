import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Noticia } from 'src/app/models/noticia';
import { Produtos } from 'src/app/models/produtos';
import { User } from 'src/app/models/user';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaNoticias = [] as Noticia[];
  listaProdutos = [] as Produtos[];
  
  constructor(private noticiaService: NoticiaService, private produtoService: ProdutosService) { }
  
  ngOnInit(): void {
    this.carregarNoticia();
    this.carregarProduto();
  }
  
  userModel = new User ("")

  onSubmit() {
    console.log(this.userModel)
  }

  carregarNoticia() {
    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas
    } )
  }

  carregarProduto() {
    this.produtoService.getProdutos().subscribe( (produtoRecebidos: Produtos[]) => {
      this.listaProdutos = produtoRecebidos
    } )
  }

}
