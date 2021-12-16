import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = "http://localhost:3000/listaProdutos";

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProdutos(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url)
  }
}
