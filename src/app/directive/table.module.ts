import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDirective } from './table.directive';
import { DesignDirective } from './design.directive';


@NgModule({
  declarations: [TableDirective, DesignDirective, ],
  imports: [
    CommonModule
  ],
  exports:[TableDirective,DesignDirective]
 
})
export class TableModule { }
