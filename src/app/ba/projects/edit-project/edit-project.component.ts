import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from "../../../project.service"
import { ActivatedRoute, Router } from '@angular/router'
import Manager from '../../../Manager'
import { OrderService } from 'src/app/order.service';
import Order from '../../../Order';
import User from "../../../User";
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  managers: User[];
  orders: Order[];
  project: {} = {};
  res: {} = {};
  projectForm: FormGroup;

  constructor(private us: UserService, private os: OrderService, private route: ActivatedRoute, private ps: ProjectService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.projectForm = this.fb.group(
      {
        project_name: ['', Validators.required],
        customer_name: ['', Validators.required],
        start_time: ['', Validators.required],
        completion_time: ['', Validators.required],
        project_manager: ['', Validators.required],
        project_description: ['', Validators.required],
        project_status: ['', Validators.required],
      }
    )
  }

  updateProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status) {
    this.route.params.subscribe(params => {
      this.ps.updateProject(project_name, customer_name, start_time, completion_time, project_manager, project_description, project_status, params['id']);
      // this.router.navigate(['table']);
      //this.modalRef.hide();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editProject(params['id']).subscribe(res => {
        console.log(res);
        this.project = { ...res };
        this.res = res;
      });
    });
    this.os.getOrderApprove().subscribe((data: Order[]) => {
      console.log(data);
      this.orders = data;
    });
    this.us.getManager().subscribe((data: User[])=>{
      console.log(data);
      this.managers = data;
    })
  }

}
