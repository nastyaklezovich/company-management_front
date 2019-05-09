import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  // acceptOrder(id) {
  //   return this
  //     .http
  //     .put(`${this.uri}/orders`, 'accepted');
  // }

  // rejectOrder(id) {
  //   return this
  //     .http
  //     .put(`${this.uri}/orders`, 'rejected');
  // }

  deleteMessage(id) {
    return this
      .http
      .delete(`${this.uri}/recommendation/${id}`);
  }

  getMessages() {
    return this
      .http
      .get(`${this.uri}/recommendations`);
  };

//   editProject(id) {
//     return this.http.get(`${this.uri}/project/${id}`);
//   }

//   updateProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status, id) {
//     const obj = {
//       project_name: project_name,
//       customer_name: customer_name,
//       start_time: start_time,
//       completion_time: completion_time,
//       project_manager: project_manager,
//       project_description: project_description,
//       project_status: project_status
//     };

//     this
//       .http
//       .put(`${this.uri}/project/${id}`, obj)
//       .subscribe(res => console.log('Done'));
//   }

//   addProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status) {
//     const obj = {
//       project_name: project_name,
//       customer_name: customer_name,
//       start_time: start_time,
//       completion_time: completion_time,
//       project_manager: project_manager,
//       project_description: project_description,
//       project_status: project_status
//     };

//     console.log(obj);

//     this.http.post(`${this.uri}/project`, obj)
//       .subscribe(res => { console.log('Done'); });
//   }
}