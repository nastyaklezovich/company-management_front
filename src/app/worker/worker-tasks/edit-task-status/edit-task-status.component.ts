import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TaskService} from '../../../task.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task-status',
  templateUrl: './edit-task-status.component.html',
  styleUrls: ['./edit-task-status.component.css']
})
export class EditTaskStatusComponent implements OnInit {

  res: {} = {};
  projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
