import { Component, OnInit } from '@angular/core';
import Project from '../../../Project';
import Order from '../../../Order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProjectService} from '../../../project.service'
import { from } from 'rxjs';
import { OrderService } from 'src/app/order.service';
import Manager from '../../../Manager'
import User from '../../../User'
import {UserService} from '../../../user.service'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  
  users: User[];

  // managers: Manager[];

  orders: Order[];

  // name: String;

  projectForm: FormGroup;

  constructor(private us: UserService, private fb: FormBuilder, private ps: ProjectService, private os: OrderService) {
    this.createForm();
  }
  
  createForm() {
    this.projectForm = this.fb.group({
      project_name: ['', Validators.required],
      customer_name:['', Validators.required],
      start_time: ['', Validators.required],
      completion_time: ['', Validators.required],
      project_manager: ['', Validators.required],
      project_description:['', Validators.required],
      project_status: ['', Validators.required],
    })
  }

  addProject(project_name, customer_name, start_time, completion_time, project_manager,  project_description, project_status){
    this.ps.addProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status);
  }

  ngOnInit() {
    this.os.getOrder().subscribe((data: Order[]) => {
      console.log(data);
      this.orders = data;
    });

    this.us.getManager().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    })

    // this.managers=
    // [
    //   {name:"1", id:"1"},
    //   {name:"2", id:"2"},
    //   {name:"3", id:"3"}
    // ];
    // console.log(this.managers);
    // this.name="";
  }

}
