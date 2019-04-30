import { Component, OnInit } from '@angular/core';
import Team from '../../Team'
import {TeamService} from '../../team.service'

@Component({
  selector: 'app-worker-team',
  templateUrl: './worker-team.component.html',
  styleUrls: ['./worker-team.component.css']
})
export class WorkerTeamComponent implements OnInit {

  teams: Team[];

  constructor(private ts: TeamService) { }

  ngOnInit() {
    this.ts.getTeam().subscribe((data: Team[])=>{
      console.log(data);
      this.teams = data;
    })
  }

}
