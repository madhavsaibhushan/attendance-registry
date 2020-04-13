import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HrMenuComponent } from '../hr-menu/hr-menu.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AttendanceStatusComponent } from '../attendance-status/attendance-status.component';
import { ReportComponent } from '../report/report.component';
import { IonButton, IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilService } from 'src/app/services/util-service.service';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogModule } from '@angular/material';
const routes: Routes = [{
  path: '',
  component: HrMenuComponent
},
{
  path: 'add-user',
  component: AddUserComponent
},
{
  path: 'attendance-status',
  component: AttendanceStatusComponent
},
{
  path: 'report',
  component: ReportComponent
},
{
  path: 'employees-list',
  component: EmployeesListComponent
}


]


@NgModule({
  declarations: [AttendanceStatusComponent,
    AddUserComponent,
    ReportComponent,
    HrMenuComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(),

  ],
  providers:[UtilService,
  ApiService]
})
export class HrModule { }
