import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhot:8080/categoria'; 

  constructor(private http: HttpClient ) { }

criarCategoria(categoria: any){
  return this.http.post<any>(`${this.apiUrl}/categorias`, categoria);
}


}
