import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepartementService {
  
  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  addDepartement(departement_name) {
    const obj = departement_name;
    this.http.post(`${this.uri}/department`, obj)
      .subscribe(res => {
          console.log("Done");
        });

    console.log(obj);
  }

  deleteDepartement(id) {
    return this
      .http
      .delete(`${this.uri}/department/${id}`);
  }

  getDepartement() {
    return this
      .http
      .get(`${this.uri}/department`);
  };

  editDepartement(id) {
    return this.http.get(`${this.uri}/department/${id}`);
  }

  updateDepartement(departement_name, id) {

    const obj =  departement_name;
    
    this
      .http
      .put(`${this.uri}/department/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}