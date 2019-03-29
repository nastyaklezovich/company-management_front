import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementService } from 'src/app/departement.service'

@Component({
  selector: 'app-departements-edit',
  templateUrl: './departements-edit.component.html',
  styleUrls: ['./departements-edit.component.css']
})

export class DepartementsEditComponent implements OnInit {

  departement: {} = {};
  res: {} = {}
  depForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ds: DepartementService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.depForm = this.fb.group({
      departements_name: ['', Validators.required],
    });
  }

  updateDepartement(departements_name) {
    this.route.params.subscribe(params => {
      this.ds.updateDepartement(departements_name,params['id']);
      // this.router.navigate(['table']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ds.editDepartement(params['id']).subscribe(res => {
        console.log(res);
        this.departement = { ...res };
        this.res = res;

      });
    });
  }

}
