import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  deleteUser(id) {
    return this
      .http
      .delete(`${this.uri}/user/${id}`);
  }

  approveRequest(id){
    return this.http.patch(`${this.uri}/user/${id}`,"true");
  }
  nonApprovedRequest(id){
    return this.http.patch(`${this.uri}/user/${id}`,"false");
  }

  addUser(full_name, email, number, position, dob) {
    const obj = {
      full_name: full_name,
      email: email,
      phone_number: number,
      position: position,
      dob: dob
    }
    console.log(obj)
    this.http.post(`${this.uri}/user`, obj)
      .subscribe(res => { console.log('Done'); });

  }

  getUser() {
    return this
      .http
    .get(`${this.uri}/users/search/resolve/${"true"}`);
  };

  getManager() {
    return this
      .http
      .get(`${this.uri}/users/search/position/${"manager"}`);
  };

  getWorker() {
    return this
      .http
      .get(`${this.uri}/users/search/position/${"worker"}`)
  }

  getNotResolve() {
    return this
    .http
    .get(`${this.uri}/users/search/resolve/${"false"}`);
  }

  editUser(id) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  updateUser(full_name, role, email, phone_number, position, dob, id) {
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