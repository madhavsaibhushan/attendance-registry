import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
