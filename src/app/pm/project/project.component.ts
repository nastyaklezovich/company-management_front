import { Component, OnInit } from '@angular/core';
import Project from '../../Project';
import { ProjectService } from "src/app/project.service"


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project[];

  constructor(private ps: ProjectService) { }

  ngOnInit() {

    this.ps.getPmProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.project = data;
    });
  }

}
