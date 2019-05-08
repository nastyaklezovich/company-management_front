import { Component, OnInit } from '@angular/core';
import Project from "../../Project";
import User from "../../User";
import Task from "../../Task";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../user.service";
import {ProjectService} from "../../project.service";
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  users: User[];
  tasks: Task[];
  projects: Project[];

  taskForm: FormGroup;

  constructor(private us: UserService, private fb: FormBuilder, private ps: ProjectService, private ts: TaskService) {
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
