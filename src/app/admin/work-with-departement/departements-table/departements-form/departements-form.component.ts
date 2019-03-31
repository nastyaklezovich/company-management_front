import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DepartementService} from 'src/app/departement.service'

@Component({
  selector: 'app-departements-form',
  templateUrl: './departements-form.component.html',
  styleUrls: ['./departements-form.component.css']
})
export class DepartementsFormComponent implements OnInit {

  depForm: FormGroup;

  constructor(private fb: FormBuilder, private ds: DepartementService) {
    this.createForm();
  }

  createForm() {
    this.depForm = this.fb.group({
      departement_name: ['', Validators.required]
    })
  }

  addDepartement(departement_name){
    this.ds.addDepartement(departement_name);
  }

  ngOnInit() {
  }

}
