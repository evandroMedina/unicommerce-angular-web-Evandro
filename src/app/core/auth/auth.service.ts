import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

//const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authenticate(login: string, senha: string){

    return this.http.post('/api/login', 
    { "login": login, "senha": senha },
    { observe: 'response' }
    )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
      console.log(`Usuário ${login} autenticado com o token ${authToken}`)
    }))
  }

  }
