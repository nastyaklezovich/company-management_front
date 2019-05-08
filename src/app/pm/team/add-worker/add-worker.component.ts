import { Component, OnInit } from '@angular/core';
import User from '../../../User'
import {UserService} from '../../../user.service'
import {TeamService} from '../../../team.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute, private ts: TeamService) { }

  deleteUserFromTeam(id){
    this.ts.deleteMember(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.getMembers(params['id']).subscribe((res: User[]) => {
        console.log(res);
        this.users=res;
      });
    });

  }

}
