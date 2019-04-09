import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service'
import User from '../../../User'
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})

export class WorkersTableComponent implements OnInit {

  public order: string = 'user.full_name';
  public reverse: boolean = false;
  sortedCollection: any[];

  users: User[];

  constructor(private us: UserService, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.users, 'user.full_name');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  deleteUser(id) {
    this.us.deleteUser(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.us.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });

  }

}
