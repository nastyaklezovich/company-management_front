import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  authorization(login, password) {
    const obj = {
        login: login,
        password: password,
    };

    console.log(obj);

    this.http.post(`${this.uri}/authorization`, obj)
      .subscribe(res => { console.log('Done'); });

    console.log(obj);
  }
}