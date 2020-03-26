import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material'
import { MatButtonModule } from '@angular/material'

import { HomePage } from './home.page';
import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HrMenuComponent } from '../components/hr-components/hr-menu/hr-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage, LoginpageComponent],
  providers: [FingerprintAIO]
})
export class HomePageModule { }
