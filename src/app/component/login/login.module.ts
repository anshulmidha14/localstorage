import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path:'', component: LoginComponent}
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    
    //SigninModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, LoginComponent]
})
  
export class LoginModule { }
