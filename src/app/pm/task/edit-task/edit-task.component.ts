import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from "../../../project.service"
import Project from '../../../Task'
import User from '../../../User'
import { UserService } from '../../../user.service'
import Task from '../../../Task'
import { TaskService } from '../../../task.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  users: User[];
  projects: Project[];
  task: {} = {};
  res: {} = {};
  taskForm: FormGroup;

  constructor(private ts: TaskService, private us: UserService, private route: ActivatedRoute, private ps: ProjectService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.taskForm = this.fb.group({
      project_name: ['', Validators.required],
      task_name:['', Validators.required],
      start_time: ['', Validators.required],
      completion_time: ['', Validators.required],
      task_worker:['', Validators.required],
      task_description:['', Validators.required],
      task_status: ['', Validators.required],
    })
  }

  updateTask(project_name, task_name, start_time, completion_time, task_worker, task_description, task_status) {
    this.route.params.subscribe(params => {
      this.ts.updateTask(project_name, task_name, start_time, completion_time, task_worker, task_description, task_status, params['id']);
      // this.router.navigate(['table']);
      //this.modalRef.hide();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.editTask(params['id']).subscribe(res => {
        console.log(res);
        this.task = { ...res };
        this.res = res;
      });
    });
    this.ps.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.projects = data;
    });
    this.us.getWorker().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    })
  }

}
