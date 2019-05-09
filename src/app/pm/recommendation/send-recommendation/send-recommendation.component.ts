import { Component, OnInit } from '@angular/core';
import User from '../../../User'
import { UserService } from '../../../user.service'
import Recommendation from '../../../Recommendation'
import { RecommendationService } from '../../../recommendation.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-send-recommendation',
  templateUrl: './send-recommendation.component.html',
  styleUrls: ['./send-recommendation.component.css']
})
export class SendRecommendationComponent implements OnInit {

  recommends: Recommendation[];
  user: {} = {};
  res: {} = {};
  recomForm: FormGroup;

  constructor(private route: ActivatedRoute, private us: UserService, private rs: RecommendationService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.recomForm = this.fb.group(
      {
        recommendation_name: ['', Validators.required],
        addressee_name: ['', Validators.required],
        recommendation_description: ['', Validators.required],
      }
    )
  }

  sendRecommendation(recommendation_name, addressee_name, recommendation_description) {
    this.route.params.subscribe(params => {
      this.rs.addRecom(recommendation_name, addressee_name, recommendation_description);
      // this.router.navigate(['table']);
      //this.modalRef.hide();
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editUser(params['id']).subscribe(res => {
        console.log(res);
        this.user = { ...res };
        this.res = res;
      });
    });
  }

}
