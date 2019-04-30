import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TaskService} from '../../../task.service'
import { ActivatedRoute, Router } from '@angular/router';
import Task from '../../../Task'



@Component({
  selector: 'app-edit-task-status',
  templateUrl: './edit-task-status.component.html',
  styleUrls: ['./edit-task-status.component.css']
})
export class EditTaskStatusComponent implements OnInit {

  tasks: Task[];
  task: {} = {};
  res: {} = {};
  projectForm: FormGroup;

  constructor(private ts: TaskService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.projectForm = this.fb.group(
       {
        task_status:['', Validators.required],
       }
     )
   }

   updateStatus(task_status){
     this.route.params.subscribe(params=>{
       this.ts.updateTaskStatus(task_status, params['id']);
     })
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.editTaskStatus(params['id']).subscribe(res => {
        console.log(res);
        this.task = { ...res };
        this.res = res;
      });
    });
    this.ts.getTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;
    });
  }

}
 