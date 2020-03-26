import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HrMenuComponent } from '../hr-menu/hr-menu.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AttendanceStatusComponent } from '../attendance-status/attendance-status.component';
import { ReportComponent } from '../report/report.component';
import { IonButton, IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
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
}
  

]


@NgModule({
  declarations: [AttendanceStatusComponent,
    AddUserComponent,
    ReportComponent,
    HrMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(),

  ]
})
export class HrModule { }
