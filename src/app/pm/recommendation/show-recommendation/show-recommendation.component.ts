import { Component, OnInit } from '@angular/core';
import Recommendation from '../../../Recommendation';
import {RecommendationService} from '../../../recommendation.service'

@Component({
  selector: 'app-show-recommendation',
  templateUrl: './show-recommendation.component.html',
  styleUrls: ['./show-recommendation.component.css']
})
export class ShowRecommendationComponent implements OnInit {

  recommendation: Recommendation[];

  constructor(private rs: RecommendationService) { }

  ngOnInit() {
    this.rs.getRecommendations().subscribe((data: Recommendation[]) => {
      console.log(data);
      this.recommendation = data;
    });}

}
