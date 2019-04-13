import { Component, OnInit } from '@angular/core';
import Project from '../../Project';
import {ProjectService} from "src/app/project.service"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: Project[];

  constructor(private ps: ProjectService) { }

  deleteProject(id) {
    this.ps.deleteProject(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.project = data;
    });
  }

}
