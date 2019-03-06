import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/order.service';
import Order from '../Form'
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  order: Order[];

  constructor(private os: OrderService) { }

  deleteBusiness(id) {
    this.os.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.os.getOrder().subscribe((data: Order[])=>{
      this.order=data;
    });
    
  }

}