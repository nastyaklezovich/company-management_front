import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {OrderService} from 'src/app/order.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private os: OrderService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      company_name: ['', Validators.required],
      email: ['', Validators.required],
      number:['', Validators.required],
      order: ['', Validators.required]
    })
  }

  addOrder(company_name, email, number, order){
    this.os.addOrder(company_name, email, number, order);
  }

  ngOnInit() {
  }

}
