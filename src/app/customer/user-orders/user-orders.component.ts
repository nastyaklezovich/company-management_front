import { Component, OnInit } from '@angular/core';
import Project from '../../Project';
import {ProjectService} from "src/app/project.service"

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  project: Project[];

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.project = data;
    });
  }

}
