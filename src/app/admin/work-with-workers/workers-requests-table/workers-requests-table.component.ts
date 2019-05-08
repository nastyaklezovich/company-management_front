import { Component, OnInit } from '@angular/core';
import {RequestCustomerService} from '../../../requestCustomer.service';
import Request from '../../../CustomerRequest';
import User from "../../../User";
import {UserService} from "../../../user.service";
import {OrderPipe} from "ngx-order-pipe";
import {routerNgProbeToken} from "@angular/router/src/router_module";

@Component({
  selector: 'app-workers-requests-table',
  templateUrl: './workers-requests-table.component.html',
  styleUrls: ['./workers-requests-table.component.css']
})

export class WorkersRequestsTableComponent implements OnInit {

  // customer_requests: Request[];
  //
  // constructor(private rs: RequestCustomerService) { }


  users: User[];

  constructor(private us: UserService) {
  }

  deleteRequest(id) {
    this.us.deleteUser(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  approveRequest(id){
    this.us.approveRequest(id).subscribe(res => {
      console.log(id);
      console.log('approve');})
  }
  nonApprovedRequest(id){

    this.us.nonApprovedRequest(id).subscribe(res => {
      console.log(id);
      console.log('approve');})
  }


  ngOnInit() {
    this.us.getNotResolve().subscribe((data:  User[])=>{
      console.log(data);
      console.log(data[0]);
      this.users = data;
    });
    
  }

}
