import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  userData: any;
  
  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  authorization(login, password) {
    const obj = {
        login: login,
        password: password,
    };

    console.log(obj);

    this.http.post(`${this.uri}/authorization`, obj)
      .subscribe(user => {
        if (user) {
          this.userData = user; // Setting up user data in userData var
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }});

    console.log(obj);
  }
}