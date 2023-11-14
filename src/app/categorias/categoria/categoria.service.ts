import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from "./categoria";

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class CategoriaService {
   
    constructor(private http: HttpClient) {}

    get(id: string) {
        return this.http
            .get<Categoria>(API + '/categoria/' + id);       
    }

    getList() {
        return this.http
            .get<Categoria[]>(API + '/categoria/lista');   
    }

    create(categoria: Categoria) {
        return this.http
            .post<Categoria>(API + '/categoria', categoria);   
    }

    adicionarCategoria(categoria: Categoria): Observable<any> {
        return this.http
        .post<any>(API + '/categoria', categoria );
    }

    listFromCategoriaPaginated(login: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
    
        return this.http
            .get<Categoria[]>(API + '/categoria/lista', { params });
    }

}
