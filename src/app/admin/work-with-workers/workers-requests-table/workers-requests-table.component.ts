import { Component, OnInit } from '@angular/core';
import {RequestCustomerService} from '../../../requestCustomer.service';
import Request from '../../../CustomerRequest';

@Component({
  selector: 'app-workers-requests-table',
  templateUrl: './workers-requests-table.component.html',
  styleUrls: ['./workers-requests-table.component.css']
})

export class WorkersRequestsTableComponent implements OnInit {

  customer_requests: Request[];

  constructor(private rs: RequestCustomerService) { }

  deleteRequest(id) {
    this.rs.deleteRequest(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  applyRequest(id){
    this.rs.deleteRequest(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');})
  }

  ngOnInit() {
    this.rs.getRequest().subscribe((data: Request[])=>{
      console.log(data);
      console.log(data[0]);
      this.customer_requests = data;
    });
    
  }

}
