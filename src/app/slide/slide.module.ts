import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SlidePage } from './slide.page';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:SlidePage,pathMatch:'full'}
]
@NgModule({
  declarations: [SlidePage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class SlideModule { }
