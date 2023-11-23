import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(login: string) {

      return this.http.get(API_URL + '/user/exists/' + login);
  }

  signup(newUser: NewUser){
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
