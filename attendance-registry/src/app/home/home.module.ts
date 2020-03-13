import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material'
import {MatButtonModule} from '@angular/material'

import { HomePage } from './home.page';
import { LoginpageComponent } from '../components/loginpage/loginpage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,LoginpageComponent]
})
export class HomePageModule {}
