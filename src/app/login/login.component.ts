import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthorizationService} from 'src/app/autharization.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userData:any;

  constructor(private fb: FormBuilder, private as: AuthorizationService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  authorization(login,password){

    this.as.authorization(login,password);
  }

  ngOnInit() {
  }


}