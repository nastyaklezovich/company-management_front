import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  uri = 'https://localhost:8080';

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

//   deleteProject(id) {
//     return this
//       .http
//       .delete(`${this.uri}/project/${id}`);
//   }

  getTasks() {
    return this
      .http
      .get(`${this.uri}/tasks`);
  };

  editTaskStatus(id) {
    return this.http.get(`${this.uri}/task/${id}`);
  }

  updateTaskStatus(task_status, id) {
    const obj = {
      task_status: task_status
    };

    this
      .http
      .put(`${this.uri}/task/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

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