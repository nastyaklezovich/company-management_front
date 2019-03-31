import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  deleteUser(id) {
    return this
      .http
      .delete(`${this.uri}/deleteUser/${id}`);
  }

  getUser() {
    return this
      .http
      .get(`${this.uri}/getUser`);
  };

  editUser(id) {
    return this.http.get(`${this.uri}/getUser/${id}`);
  }

  updateUser(full_name, role, email, position, dob, id) {
    const obj = {
      full_name: full_name,
      role: role,
      email: email,
      position: position,
      dob: dob,
    };
    
    this
      .http
      .put(`${this.uri}/updateUser/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }


}