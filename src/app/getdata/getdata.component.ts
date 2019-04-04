import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/order.service';
import Order from '../Form'
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  orders: Order[];

  constructor(private os: OrderService) { }

  deleteOrder(id) {
    this.os.deleteOrder(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.os.getOrder().subscribe((data: Order[])=>{
      console.log(data);
      this.orders = data;
    });
    
  }

}
