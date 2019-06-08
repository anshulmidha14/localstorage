import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'', component: SigninComponent}
];



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, SigninComponent]
})
  
export class SigninModule { }
