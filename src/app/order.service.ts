import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  acceptOrder(id){
    return this
    .http
    .put(`${this.uri}/orders`, 'accepted');
  }

  rejectOrder(id){
    return this
    .http
    .put(`${this.uri}/orders`, 'rejected');
  }
  
  // deleteOrder(id) {
  //   return this
  //     .http
  //     .delete(`${this.uri}/order/${id}`);
  // }

  getOrder() {
    return this
      .http
      .get(`${this.uri}/orders`);
  };

  // editOrder(id) {
  //   return this.http.get(`${this.uri}/order/${id}`);
  // }

  // updateOrder(person_name, email, number, order, id) {
  //   const obj = {
  //     person_name: person_name,
  //     email: email,
  //     number: number,
  //     order: order
  //   };
    
  //   this
  //     .http
  //     .put(`${this.uri}/order/${id}`, obj)
  //     .subscribe(res => console.log('Done'));
  // }

  addOrder(company_name, email, number, order) {
    const obj = {
      company_name: company_name,
      email: email,
      number: number,
      order: order
    };

    console.log(obj);


    this.http.post(`${this.uri}/order`, obj)
      .subscribe(res => { console.log('Done'); });


    console.log(obj);
  }
}