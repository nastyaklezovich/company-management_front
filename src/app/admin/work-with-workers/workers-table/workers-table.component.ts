import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service'
import User from '../../../User'

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})

export class WorkersTableComponent implements OnInit {

  users: User[];

  constructor(private us: UserService) { }

  deleteUser(id) {
    this.us.deleteUser(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  

  ngOnInit() {
    this.us.getUser().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    });
    
  }

}
