import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path:'', component: DeleteComponent}
]; 

@NgModule({
  declarations: [AddComponent, DeleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, AddComponent]
})
export class AddModule { }
