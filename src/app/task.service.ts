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

  addTask(project_name, task_name, start_time, completion_time, task_worker, task_description, task_status) {
    const obj = {
      project_name: project_name,
      task_name: task_name,
      start_time: start_time,
      completion_time: completion_time,
      task_worker: task_worker,
      task_description: task_description,
      task_status: task_status
    };

    console.log(obj);

    this.http.post(`${this.uri}/task`, obj)
      .subscribe(res => { console.log('Done'); });
  }
}