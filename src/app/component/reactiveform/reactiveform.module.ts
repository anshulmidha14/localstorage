import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
  {path:'', component:ReactiveformComponent}
];



@NgModule({
  declarations: [ReactiveformComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, ReactiveformComponent]
})
export class ReactiveformModule { }
