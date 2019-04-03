import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementService } from 'src/app/departement.service'
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-departements-edit',
  templateUrl: './departements-edit.component.html',
  styleUrls: ['./departements-edit.component.css']
})

export class DepartementsEditComponent implements OnInit {

  modalRef: BsModalRef;
  departement: {} = {};
  res: {} = {}
  depForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ds: DepartementService,
    private fb: FormBuilder,
    private modalService: BsModalService) {
    this.createForm();
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  createForm() {
    this.depForm = this.fb.group({
      departement_name: ['', Validators.required],
    });
  }

  updateDepartement(departement_name) {
    this.route.params.subscribe(params => {
      this.ds.updateDepartement(departement_name, params['id']);
      // this.router.navigate(['table']);
      this.modalRef.hide();
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
