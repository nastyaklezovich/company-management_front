import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Order from '../../Form';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  order: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private os: OrderService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      order: ['', Validators.required]
    });
  }

  updateOrder(person_name, email, number, order) {
    this.route.params.subscribe(params => {
      this.os.updateOrder(person_name, email, number, order, params['id']);
      this.router.navigate(['table']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.os.editOrder(params['id']).subscribe(res => {
        this.order = res;
      });
    });
  }

}
