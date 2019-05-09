import { Component, OnInit } from '@angular/core';
import User from '../../../User'
import {UserService} from '../../../user.service'
import {TeamService} from '../../../team.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  users: User[];
  workers: User[];
  memberForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private ts: TeamService) {
    this.createForm();
   }

   createForm() {
    this.memberForm = this.fb.group({
      worker_name: ['', Validators.required],
    })
  }
  
  addWorker(worker_name) {
    this.ts.addWorker(worker_name);
  }


  deleteUserFromTeam(id){
    this.ts.deleteMember(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.getWorker(params['id']).subscribe((res: User[]) => {
        console.log(res);
        this.users=res;
      });
    });
    this.route.params.subscribe(params => {
      this.ts.getMembers(params['id']).subscribe((res: User[]) => {
        console.log(res);
        this.users=res;
      });
    });

  }

}
