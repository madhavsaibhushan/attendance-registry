import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './check-in.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import  {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx'
export const routes: Routes = [
  {
    path: '',
    component: CheckInComponent
  }
]

@NgModule({
  declarations: [CheckInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [CheckInComponent],
  providers:[FingerprintAIO]
})
export class CheckInModule { }
 