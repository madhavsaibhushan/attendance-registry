import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceRegisterComponent } from './attendance-register.component';

export const routes: Routes = [
  {
    path: '',
    component: AttendanceRegisterComponent
  }
]

@NgModule({
  declarations: [AttendanceRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[AttendanceRegisterComponent]
})
export class AttendanceRegisterModule { }
