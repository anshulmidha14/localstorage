import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveloginComponent } from './reactivelogin/reactivelogin.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component:ReactiveloginComponent}
];

@NgModule({
  declarations: [ReactiveloginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, ReactiveloginComponent]
})
export class ReactiveloginModule { }
