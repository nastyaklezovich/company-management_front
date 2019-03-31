import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepartementService {
  
  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  addDepartement(departement_name) {
    const obj = {
        departement_name: departement_name,
    };

    this.http.post(`${this.uri}/addDepartement`, obj)
      .subscribe(res => {
          console.log("Done");
        });

    console.log(obj);
  }

  deleteDepartement(id) {
    return this
      .http
      .delete(`${this.uri}/deleteDepartement/${id}`);
  }

  getDepartement() {
    return this
      .http
      .get(`${this.uri}/getDepartement`);
  };

  editDepartement(id) {
    return this.http.get(`${this.uri}/getDepartement/${id}`);
  }

  updateDepartement(department_name, id) {
    const obj = {
      departement_name: department_name,
    };
    
    this
      .http
      .put(`${this.uri}/updateDepartement/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}