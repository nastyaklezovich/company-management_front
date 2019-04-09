import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service'

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: {} = {};
  res: {} = {}
  usForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.usForm = this.fb.group({
      full_name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      position: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  updateOrder(full_name, role, email, phone_number,position, dob) {
    this.route.params.subscribe(params => {
      this.us.updateUser(full_name, role, email,phone_number, position, dob, params['id']);
      // this.router.navigate(['table']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editUser(params['id']).subscribe(res => {
        console.log(res);
        this.user = { ...res };
        this.res = res;
      });
    });
  }

}
