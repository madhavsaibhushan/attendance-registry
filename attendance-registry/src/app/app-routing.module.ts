import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HrMenuComponent } from './components/hr-components/hr-menu/hr-menu.component';
import { AddUserComponent } from './components/hr-components/add-user/add-user.component';
import { AttendanceStatusComponent } from './components/hr-components/attendance-status/attendance-status.component';
import { ReportComponent } from './components/hr-components/report/report.component';
// import { settings } from 'cluster';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'checkin', loadChildren: () => import('./components/check-in/check-in.module').
      then(checkin => checkin.CheckInModule)
  },
  {
    path: 'settings', loadChildren: () => import('./components/settings/settings.module').
      then(settings => settings.SettingsModule)
  },
  {
    path: 'attendance', loadChildren: () => import('./components/attendance-register/attendance-register.module').
      then(attendance => attendance.AttendanceRegisterModule)
},{
    path: 'hr', loadChildren: () => import('./components/hr-components/hr-module/hr.module').
    then(hr => hr.HrModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
