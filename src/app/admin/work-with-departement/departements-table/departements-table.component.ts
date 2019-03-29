import { Component, OnInit } from '@angular/core';
import {DepartementService} from 'src/app/departement.service'
import Departement from '../../../Departement'

@Component({
  selector: 'app-departements-table',
  templateUrl: './departements-table.component.html',
  styleUrls: ['./departements-table.component.css']
})
export class DepartementsTableComponent implements OnInit {

  departements: Departement[];

  constructor(private ds: DepartementService) { }

  deleteDepartement(id) {
    this.ds.deleteDepartement(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ds.getDepartement().subscribe((data: Departement[])=>{
      console.log(data);
      this.departements = data;
    });
    
  }

}
