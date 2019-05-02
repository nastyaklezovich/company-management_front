import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  deleteTeam(id) {
    return this
      .http
      .delete(`${this.uri}/team/${id}`);
  }

  getTeam() {
    return this
      .http
      .get(`${this.uri}/teams`);
  };

  editTeam(id) {
    return this.http.get(`${this.uri}/team/${id}`);
  }

//   updateTeam(full_name, role, email,phone_number, position, dob, id) {
//     const obj = {
//       full_name: full_name,
//       role: role,
//       email: email,
//       phone_number: phone_number,
//       position: position,
//       dob: dob,
//     };
    
//     this
//       .http
//       .put(`${this.uri}/user/${id}`, obj)
//       .subscribe(res => console.log('Done'));
//   }


}