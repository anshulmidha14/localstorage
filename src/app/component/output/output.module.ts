import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output/output.component';
import { ShowComponent } from './show/show.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'', component: OutputComponent}
];


@NgModule({
  declarations: [OutputComponent, ShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, OutputComponent]
})
export class OutputModule { }
