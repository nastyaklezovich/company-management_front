import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestCustomerService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  deleteRequest(id) {
    return this
      .http
      .delete(`${this.uri}/customer-request/${id}`);
  }

  getRequest() {
    return this
      .http
      .get(`${this.uri}/customer-requests`);
  };

  applyRequest(id) {

    this.http.post(`${this.uri}/customer-request`, id)
      .subscribe(res => { console.log('Done'); });
    console.log(id);
  }
}