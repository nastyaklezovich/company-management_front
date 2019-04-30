import { Component, OnInit } from '@angular/core';
import Project from '../../Project';
import {ProjectService} from "src/app/project.service"

@Component({
  selector: 'app-worker-projects',
  templateUrl: './worker-projects.component.html',
  styleUrls: ['./worker-projects.component.css']
})
export class WorkerProjectsComponent implements OnInit {

  project: Project[];
  
  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.project = data;
    });
  }

}
