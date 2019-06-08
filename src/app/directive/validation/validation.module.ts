import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [ValidationDirective],
  imports: [
    CommonModule
  ]
})
export class ValidationModule { }
