import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  uri = 'https://localhost:8080';

  constructor(private http: HttpClient) { }

  acceptOrder(id) {
    return this
      .http
      .put(`${this.uri}/orders`, 'accepted');
  }

  rejectOrder(id) {
    return this
      .http
      .put(`${this.uri}/orders`, 'rejected');
  }

  deleteProject(id) {
    return this
      .http
      .delete(`${this.uri}/project/${id}`);
  }

  getProjects() {
    return this
      .http
      .get(`${this.uri}/projects`);
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

  addProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status) {
    const obj = {
      project_name: project_name,
      customer_name: customer_name,
      start_time: start_time,
      completion_time: completion_time,
      project_manager: project_manager,
      project_description: project_description,
      project_status: project_status
    };

    console.log(obj);

    this.http.post(`${this.uri}/project`, obj)
      .subscribe(res => { console.log('Done'); });
  }
}