import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DepartementService} from 'src/app/departement.service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-departements-form',
  templateUrl: './departements-form.component.html',
  styleUrls: ['./departements-form.component.css']
})
export class DepartementsFormComponent implements OnInit {

  modalRef:BsModalRef;
  depForm: FormGroup;

  constructor(private fb: FormBuilder, private ds: DepartementService, private modalService: BsModalService) {
    this.createForm();
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  createForm() {
    this.depForm = this.fb.group({
      departement_name: ['', Validators.required]
    })
  }

  addDepartement(departement_name){
    this.ds.addDepartement(departement_name);
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
