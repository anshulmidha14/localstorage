import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: './component/header/header.module#HeaderModule' },

 // {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', loadChildren: './component/login/login.module#LoginModule' },

 // {path:'',redirectTo:'signin' ,pathMatch:'full'},
  {path:'signin',loadChildren: './component/signin/signin.module#SigninModule'},

 // {path:'',redirectTo:'add' ,pathMatch:'full'},
  {path:'add',loadChildren: './component/add/add.module#AddModule'},

  {path:'show',loadChildren: './component/output/output.module#OutputModule'},

  {path:'reactiveform',loadChildren: './component/reactiveform/reactiveform.module#ReactiveformModule'},

  {path:'loginform',loadChildren: './component/reactivelogin/reactivelogin.module#ReactiveloginModule'},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
