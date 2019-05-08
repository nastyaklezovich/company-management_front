import { Component, OnInit } from '@angular/core';
import Team from '../../Team'
import {TeamService} from '../../team.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[];

  constructor(private ts: TeamService) { }

  deleteTeam(id) {
    this.ts.deleteTeam(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ts.getTeam().subscribe((data: Team[])=>{
      console.log(data);
      this.teams = data;
    })
  }

}
