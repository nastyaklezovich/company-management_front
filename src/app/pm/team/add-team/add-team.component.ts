import { Component, OnInit } from '@angular/core';
import User from '../../../User'
import { UserService } from '../../../user.service'
import Team from '../../../Team'
import { TeamService } from '../../../team.service'
import Project from '../../../Project'
import { ProjectService } from '../../../project.service'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  projects: Project[];

  teamForm: FormGroup;

  constructor(private us: UserService, private fb: FormBuilder, private ps: ProjectService, private ts: TeamService) {
    this.createForm();
  }


  createForm() {
    this.teamForm = this.fb.group({
      team_name: ['', Validators.required],
      project_name: ['', Validators.required],
    })
  }



  addTeam(team_name, project_name) {
    this.ts.addTeam(team_name, project_name);
  }

  ngOnInit() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.projects = data;
    });

    // this.us.getManager().subscribe((data: User[])=>{
    //   console.log(data);
    //   this.users = data;
    // })
    //
  }

}
