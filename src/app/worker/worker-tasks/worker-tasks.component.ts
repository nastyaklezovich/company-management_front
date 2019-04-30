import { Component, OnInit } from '@angular/core';
import Task from '../../Task'
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-worker-tasks',
  templateUrl: './worker-tasks.component.html',
  styleUrls: ['./worker-tasks.component.css']
})
export class WorkerTasksComponent implements OnInit {

  task: Task[];

  constructor(private ts: TaskService) { }

  ngOnInit() {
    this.ts.getTasks().subscribe((data: Task[])=>{
      console.log(data);
      this.task=data;
    })
  }

}
