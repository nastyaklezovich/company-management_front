import { Component, OnInit } from '@angular/core';
import Task from "../../Task";
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task[];

  constructor(private ts: TaskService) { }

  ngOnInit() {
    this.ts.getTasks().subscribe((data: Task[])=>{
      console.log(data);
      this.task=data;
    })
  }

}
