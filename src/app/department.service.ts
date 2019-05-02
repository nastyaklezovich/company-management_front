import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  
  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  addDepartment(department_name) {
    const obj = department_name;
    this.http.post(`${this.uri}/department`, obj)
      .subscribe(res => {
          console.log("Done");
        });

    console.log(obj);
  }

  deleteDepartment(id) {
    return this
      .http
      .delete(`${this.uri}/department/${id}`);
  }

  getDepartment() {
    return this
      .http
      .get(`${this.uri}/departments`);
  };

  editDepartment(id) {
    return this.http.get(`${this.uri}/department/${id}`);
  }

  updateDepartment(department_name, id) {

    const obj =  department_name;
    
    this
      .http
      .put(`${this.uri}/department/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}