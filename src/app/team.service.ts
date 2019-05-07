import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  deleteMember(id) {
    return this
      .http
      .delete(`${this.uri}/team/member/${id}`);
  }


  addTeam(team_name, project_name){
    const obj={
      team_name: team_name,
      project_name: project_name,
    }
    console.log(obj);
    this.http.post(`${this.uri}/team`, obj)
      .subscribe(res => { console.log('Done'); });
  }

  deleteTeam(id) {
    return this
      .http
      .delete(`${this.uri}/team/${id}`);
  }

  getMembers(id) {
    return this
    .http
    .get(`${this.uri}/team/${id}`);
  }

  getTeam() {
    return this
      .http
      .get(`${this.uri}/teams`);
  };

  editTeam(id) {
    return this.http.get(`${this.uri}/team/${id}`);
  }

  updateTeam(team_name, project_name, id) {
    const obj = {
      team_name:team_name,
      project_name: project_name,
    };
    
    this
      .http
      .put(`${this.uri}/team/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }


}