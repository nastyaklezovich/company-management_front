import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  uri = 'http://localhost:800';

  constructor(private http: HttpClient) { }

  addOrder(person_name, email, number, order) {
    const obj = {
      person_name: person_name,
      email: email,
      number: number,
      order: order

    };

    console.log(obj);

// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res =>{console.log('Done');});
      
//       fetch( '/skill', { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
// body: JSON.stringify(obj) }).then(result => result.json().then(console.log));

    console.log(obj);
  }
}