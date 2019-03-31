import { Component, OnInit } from '@angular/core';
import Request from '../../../Request';
import {RequestService} from '../../../request.service';

@Component({
  selector: 'app-workers-requests-table',
  templateUrl: './workers-requests-table.component.html',
  styleUrls: ['./workers-requests-table.component.css']
})

export class WorkersRequestsTableComponent implements OnInit {

  requests: Request[];

  constructor(private rs: RequestService) { }

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
      this.requests = data;
    });
    
  }

}
