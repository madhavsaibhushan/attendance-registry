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
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage, LoginpageComponent],
  providers: [FingerprintAIO, ApiService]
})
export class HomePageModule { }
