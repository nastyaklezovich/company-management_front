import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  deleteRequest(id) {
    return this
      .http
      .delete(`${this.uri}/deleteRequest/${id}`);
  }

  getRequest() {
    return this
      .http
      .get(`${this.uri}/getRequest`);
  };

  applyRequest(id) {

    this.http.post(`${this.uri}/addUser`, id)
      .subscribe(res => { console.log('Done'); });
    console.log(id);
  }
}