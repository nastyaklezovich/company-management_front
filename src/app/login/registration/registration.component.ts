import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import User from '../../User'
import {UserService} from '../../user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup;
  private user: any;

  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
   }

   createForm() {
    this.registrationForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      position: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
   
  registration(full_name, email, number, position, dob){
    this.us.addUser(full_name, email, number, position, dob);
  }

  ngOnInit() {
  }

}
