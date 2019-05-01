import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Project from '../../../Project';
import {ProjectService} from '../../../project.service'
import User from '../../../User'
import {UserService} from '../../../user.service'
import Task from '../../../Task'
import {TaskService} from '../../../task.service'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  users: User[];
  tasks: Task[];
  projects: Project[];

  taskForm: FormGroup;

  constructor(private us: UserService, private fb: FormBuilder, private ps: ProjectService, private ts: TaskService) { 
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

  addTask(project_name, task_name, start_time, completion_time, task_worker,  task_description, task_status){
    this.ts.addTask(project_name, task_name, start_time, completion_time, task_worker,  task_description, task_status);
  }

  ngOnInit() {
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
