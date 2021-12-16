import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  url = "http://localhost:3000/noticias";

  constructor(private httpClient: HttpClient) {  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }

}
