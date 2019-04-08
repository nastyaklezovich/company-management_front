import { Component, OnInit, TemplateRef } from '@angular/core';
import {DepartmentService} from 'src/app/department.service'
import Departement from '../../../Departement';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-departements-table',
  templateUrl: './departements-table.component.html',
  styleUrls: ['./departements-table.component.css']
})
export class DepartementsTableComponent implements OnInit {

  public order: string = 'departement.departement_name';
  public reverse: boolean = false;

  public popoverTitle: string ="Удаление";
  public popoverMessage: string='Вы действительно хотите удалить данные?';
  public confirmClicked:boolean=false;
  public cancelClicked: boolean = false;

  departements: Departement[];

  p: number = 1;

  sortedCollection: any[];

  constructor(private ds: DepartmentService, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.departements, 'departement.departement_name');
    console.log(this.sortedCollection);
   }

  deleteDepartement(id) {
    this.ds.deleteDepartment(id).subscribe(res => {
      console.log(id);
      console.log('Deleted'); 
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  // open(){
  //   this.dfc.
  // }

  ngOnInit() {
    this.ds.getDepartment().subscribe((data: Departement[])=>{
      console.log(data);
      this.departements = data;
    });
    
  }
  

}
