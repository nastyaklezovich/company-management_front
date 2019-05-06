import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecommendationService {

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

  //   deleteProject(id) {
  //     return this
  //       .http
  //       .delete(`${this.uri}/project/${id}`);
  //   }

  getRecommendations() {
    return this
      .http
      .get(`${this.uri}/recommendations`);
  };

//   editTaskStatus(id) {
//     return this.http.get(`${this.uri}/task/${id}`);
//   }

//   editTask(id) {
//     return this.http.get(`${this.uri}/task/${id}`);
//   }
//   updateTask(project_name, task_name, start_time, completion_time, task_worker, task_description, task_status,id){
//     const obj = {
//       project_name: project_name,
//       task_name: task_name,
//       start_time: start_time,
//       completion_time: completion_time,
//       task_worker: task_worker,
//       task_description: task_description,
//       task_status: task_status
//     };

//     this
//       .http
//       .put(`${this.uri}/task/${id}`, obj)
//       .subscribe(res => console.log('Done'));
//   }

//   updateTaskStatus(task_status, id) {
//     const obj = {
//       task_status: task_status
//     };

//     this
//       .http
//       .put(`${this.uri}/task/${id}`, obj)
//       .subscribe(res => console.log('Done'));
//   }

  addRecom(recommendation_name, addressee_name, recommendation_description) {
    const obj = {
      recommendation_name: recommendation_name,
      addressee_name: addressee_name, 
      recommendation_description: recommendation_description,
    };

    console.log(obj);

    this.http.post(`${this.uri}/recommendation`, obj)
      .subscribe(res => { console.log('Done'); });
  }
}