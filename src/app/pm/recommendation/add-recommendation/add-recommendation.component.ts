import { Component, OnInit } from '@angular/core';
import User from "../../../User";
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-add-recommendation',
  templateUrl: './add-recommendation.component.html',
  styleUrls: ['./add-recommendation.component.css']
})
export class AddRecommendationComponent implements OnInit {

  users: User[];
  constructor(private us: UserService) { }

  ngOnInit() {this.us.getUser().subscribe((data: User[]) => {
    console.log(data);
    this.users = data;
  });
  }

}
