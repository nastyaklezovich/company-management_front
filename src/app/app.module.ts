import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { OrderService } from './order.service';
import { RouterModule } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {OrderModule} from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './content/services/services.component';
import { ReviewsComponent } from './content/reviews/reviews.component';
import { PartnersComponent } from './content/partners/partners.component';
import { FormComponent } from './content/form/form.component';
import { ImagesComponent } from './content/images/images.component';
import { DevelopmentComponent } from './content/services/development/development.component';
import { AnaliticsComponent } from './content/services/analitics/analitics.component';
import { TechnologiesComponent } from './content/services/technologies/technologies.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { GetdataComponent } from './getdata/getdata.component';
import { EditdataComponent } from './getdata/editdata/editdata.component';
import { BAComponent } from './ba/ba.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './ba/projects/projects.component';
import { RequestsComponent } from './ba/requests/requests.component';
import { WorkWithWorkersComponent } from './admin/work-with-workers/work-with-workers.component';
import { WorkWithDepartementComponent } from './admin/work-with-departement/work-with-departement.component';
import { DepartementsFormComponent } from './admin/work-with-departement/departements-table/departements-form/departements-form.component';
import { DepartementsTableComponent } from './admin/work-with-departement/departements-table/departements-table.component';
import { WorkersTableComponent } from './admin/work-with-workers/workers-table/workers-table.component';
import { WorkersRequestsTableComponent } from './admin/work-with-workers/workers-requests-table/workers-requests-table.component';
import { DepartmentService } from './department.service';
import { DepartementsEditComponent } from './admin/work-with-departement/departements-table/departements-edit/departements-edit.component';
import { UsersEditComponent } from './admin/work-with-workers/workers-table/users-edit/users-edit.component';


const routes = [
  { path: '', component: ContentComponent },
  { path: 'table', component: GetdataComponent },
  { path: 'edit/:id', component: EditdataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [{ path: 'departements', component: WorkWithDepartementComponent, children: [{ path: 'editDepartements/:id', component: DepartementsEditComponent }, { path: 'addDepartements', component: DepartementsFormComponent }] },
    { path: 'workers', component: WorkWithWorkersComponent, children: [{ path: 'workersTable', component: WorkersTableComponent, children:[{path:'editUser/:id', component: UsersEditComponent}] }, { path: 'workersRequest', component: WorkersRequestsTableComponent }] }]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ServicesComponent,
    ReviewsComponent,
    PartnersComponent,
    FormComponent,
    ImagesComponent,
    DevelopmentComponent,
    AnaliticsComponent,
    TechnologiesComponent,
    ContactsComponent,
    GetdataComponent,
    EditdataComponent,
    BAComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    ProjectsComponent,
    RequestsComponent,
    WorkWithWorkersComponent,
    WorkWithDepartementComponent,
    DepartementsFormComponent,
    DepartementsTableComponent,
    WorkersTableComponent,
    WorkersRequestsTableComponent,
    DepartementsEditComponent,
    UsersEditComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    OrderModule
  ],

  providers: [OrderService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
