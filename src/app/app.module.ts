import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { OrderService } from "./order.service";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgxPaginationModule } from "ngx-pagination";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { OrderModule } from "ngx-order-pipe";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./content/header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { ServicesComponent } from "./content/services/services.component";
import { ReviewsComponent } from "./content/reviews/reviews.component";
import { PartnersComponent } from "./content/partners/partners.component";
import { FormComponent } from "./content/form/form.component";
import { ImagesComponent } from "./content/images/images.component";
import { DevelopmentComponent } from "./content/services/development/development.component";
import { AnaliticsComponent } from "./content/services/analitics/analitics.component";
import { TechnologiesComponent } from "./content/services/technologies/technologies.component";
import { ContactsComponent } from "./content/contacts/contacts.component";
import { BAComponent } from "./ba/ba.component";
import { AdminComponent } from "./admin/admin.component";
import { CustomerComponent } from "./customer/customer.component";
import { LoginComponent } from "./login/login.component";
import { ProjectsComponent } from "./ba/projects/projects.component";
import { WorkWithWorkersComponent } from "./admin/work-with-workers/work-with-workers.component";
import { WorkWithDepartementComponent } from "./admin/work-with-departement/work-with-departement.component";
import { DepartementsFormComponent } from "./admin/work-with-departement/departements-table/departements-form/departements-form.component";
import { DepartementsTableComponent } from "./admin/work-with-departement/departements-table/departements-table.component";
import { WorkersTableComponent } from "./admin/work-with-workers/workers-table/workers-table.component";
import { WorkersRequestsTableComponent } from "./admin/work-with-workers/workers-requests-table/workers-requests-table.component";
import { DepartmentService } from "./department.service";
import { DepartementsEditComponent } from "./admin/work-with-departement/departements-table/departements-edit/departements-edit.component";
import { UsersEditComponent } from "./admin/work-with-workers/workers-table/users-edit/users-edit.component";

import { CoreModule, AuthGuard, RoleType } from "./core";
import { OrdersComponent } from './ba/orders/orders.component';
import { EditProjectComponent } from './ba/projects/edit-project/edit-project.component';
import { AddProjectComponent } from './ba/projects/add-project/add-project.component';
import { UserOrdersComponent } from './customer/user-orders/user-orders.component';
import { WorkerComponent } from './worker/worker.component';
import { MessagesComponent } from './worker/messages/messages.component';
import { WorkerProjectsComponent } from './worker/worker-projects/worker-projects.component';
import { WorkerTasksComponent } from './worker/worker-tasks/worker-tasks.component';
import { WorkerTeamComponent } from './worker/worker-team/worker-team.component';
import { EditTaskStatusComponent } from './worker/worker-tasks/edit-task-status/edit-task-status.component';
import { PmComponent } from './pm/pm.component';
import { TeamComponent } from './pm/team/team.component';
import { ProjectComponent } from './pm/project/project.component';
import { TaskComponent } from './pm/task/task.component';
import { RecommendationComponent } from './pm/recommendation/recommendation.component';
import { AddTaskComponent } from './pm/task/add-task/add-task.component';
import { EditTaskComponent } from './pm/task/edit-task/edit-task.component';
import { AddRecommendationComponent } from './pm/recommendation/add-recommendation/add-recommendation.component';
import { SendRecommendationComponent } from './pm/recommendation/send-recommendation/send-recommendation.component';
import { ShowRecommendationComponent } from './pm/recommendation/show-recommendation/show-recommendation.component';
import { RegistrationComponent } from './login/registration/registration.component';

const routes = [
  {
    path: "",
    component: ContentComponent
  },
  {
    path: "login",
    component: LoginComponent,
    children:[
      {
        path: "registration",
        component: RegistrationComponent
      }
    ]
  },
  { 
    path: "services", 
    component: ServicesComponent 
  },
  {
    path: "pm", 
    component: PmComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [RoleType.PM] },
    children:[
      {
        path:"pmTeam",
        component: TeamComponent,
      },
      {
        path:"pmProject",
        component: ProjectComponent,
      },
      {
        path:"pmTasks",
        component:TaskComponent,
        children:[
          {
            path:"addTask",
            component: AddTaskComponent,
          }
        ]
      },
      {
        path:"pmRecomendation",
        component:RecommendationComponent,
        children:[
          {
            path: "showRecommendation",
            component: ShowRecommendationComponent,
          },
          {
            path:"addRecomendation",
            component: AddRecommendationComponent,
            children: [
              {
                path:"sendRecommendation",
                component: SendRecommendationComponent
              }
            ]
          }
        ]
      }

    ]

  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.Admin] },
    children: [
      {
        path: "departements",
        component: WorkWithDepartementComponent,
        children: [
          {
            path: "editDepartements/:id",
            component: DepartementsEditComponent
          },
          { path: "addDepartements", component: DepartementsFormComponent }
        ]
      },
      {
        path: "workers",
        component: WorkWithWorkersComponent,
        children: [
          {
            path: "workersTable",
            component: WorkersTableComponent,
            children: [
              {
                path: "editUser/:id",
                component: UsersEditComponent
              }]
          },
          {
            path: "workersRequest",
            component: WorkersRequestsTableComponent,
          }
        ]
      }
    ]
  },
  {
    path: "ba",
    component: BAComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.BA] },
    children: [
      {
        path: "orders",
        component: OrdersComponent,
      },
      {
        path: "projects",
        component: ProjectsComponent,
        children:
          [
            {
              path: "editProject/:id",
              component: EditProjectComponent,
            },
            {
              path: "addProject",
              component: AddProjectComponent,
            }
          ]
      }
    ]
  },
  {
    path: "customer",
    component: CustomerComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.User] },
    children:
      [
        {
          path: "customerOrders",
          component: UserOrdersComponent,
        }
      ]
  },
  {
    path: "worker",
    component: WorkerComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.Worker] },
    children:
      [
        {
          path: "messages",
          component: MessagesComponent,
        },
        {
          path: "workerProjects",
          component: WorkerProjectsComponent,
        },
        {
          path: "workerTasks",
          component: WorkerTasksComponent,
          children:
            [
              {
                path: "editStatusTask",
                component: EditTaskStatusComponent,
              }
            ]
        },
        {
          path: "workerTeam",
          component: WorkerTeamComponent,
        }
      ]
  }
];

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
    BAComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    ProjectsComponent,
    WorkWithWorkersComponent,
    WorkWithDepartementComponent,
    DepartementsFormComponent,
    DepartementsTableComponent,
    WorkersTableComponent,
    WorkersRequestsTableComponent,
    DepartementsEditComponent,
    UsersEditComponent,
    OrdersComponent,
    EditProjectComponent,
    AddProjectComponent,
    UserOrdersComponent,
    WorkerComponent,
    MessagesComponent,
    WorkerProjectsComponent,
    WorkerTasksComponent,
    WorkerTeamComponent,
    EditTaskStatusComponent,
    PmComponent,
    TeamComponent,
    ProjectComponent,
    TaskComponent,
    RecommendationComponent,
    AddTaskComponent,
    EditTaskComponent,
    AddRecommendationComponent,
    SendRecommendationComponent,
    ShowRecommendationComponent,
    RegistrationComponent,

  ],
  imports: [
    CoreModule,
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
    ConfirmationPopoverModule.forRoot({ confirmButtonType: "danger" }),
    OrderModule
  ],

  providers: [OrderService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
