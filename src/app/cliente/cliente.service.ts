import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/cliente'; 

  constructor(private http: HttpClient ) { }

criarCliente(cliente: any){
  return this.http.post<any>(`${this.apiUrl}/cliente`, cliente);
}
}
