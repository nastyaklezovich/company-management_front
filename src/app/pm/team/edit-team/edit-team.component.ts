import { Component, OnInit } from '@angular/core';
import Project from '../../../Project'
import {ProjectService} from '../../../project.service'
import Team from '../../../Team'
import {TeamService} from '../../../team.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  projects: Project[];
  team: {}={};
  res: {}={};

  teamForm: FormGroup;

  constructor(private ps: ProjectService, private fb: FormBuilder, private route: ActivatedRoute, private ts: TeamService) { 
    this.createForm();
  }

  createForm() {
    this.teamForm = this.fb.group({
      team_name: ['', Validators.required],
      project_name: ['', Validators.required],
    })
  }
 
  updateTeam(team_name, project_name) {
    this.route.params.subscribe(params => {
      this.ts.updateTeam(team_name, project_name, params['id']);
      // this.router.navigate(['table']);
      //this.modalRef.hide();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.editTeam(params['id']).subscribe(res => {
        console.log(res);
        this.team = { ...res };
        this.res = res;
      });
    });
    this.ts.getTeam().subscribe((data: Team[]) => {
      console.log(data);
      this.team = data;
    });
  }

}
