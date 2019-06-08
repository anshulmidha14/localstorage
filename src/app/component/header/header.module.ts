import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/directive/table.module';


const routes: Routes = [
  {path:'', component: HeaderComponent}
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HeaderModule { }
