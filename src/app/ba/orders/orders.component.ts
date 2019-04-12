import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/order.service';
import Order from '../../Order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  orders: Order[];

  constructor(private os: OrderService) { }

  acceptOrder(id){
    this.os.acceptOrder(id).subscribe(res=>{
      console.log(id);
      console.log('Order aссepted')
    })
  }

  rejectOrder(id){

  }

  ngOnInit() {
    this.os.getOrder().subscribe((data:Order[])=>{
      console.log(data);
      this.orders = data;
    })
  }

}
