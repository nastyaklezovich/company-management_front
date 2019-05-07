import { Component, OnInit } from '@angular/core';
import User from '../../../User'
import {UserService} from '../../../user.service'
import {TeamService} from '../../../team.service'

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  users: User[];


  constructor(private ts: TeamService) { }

  deleteUserFromTeam(id){
    this.ts.deleteMember(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ts.getMembers(id).subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    })
  }

}
