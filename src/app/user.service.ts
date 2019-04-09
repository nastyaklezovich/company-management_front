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
      .delete(`${this.uri}/user/${id}`);
  }

  getUser() {
    return this
      .http
      .get(`${this.uri}/users`);
  };

  editUser(id) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  updateUser(full_name, role, email,phone_number, position, dob, id) {
    const obj = {
      full_name: full_name,
      role: role,
      email: email,
      phone_number: phone_number,
      position: position,
      dob: dob,
    };
    
    this
      .http
      .put(`${this.uri}/user/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }


}