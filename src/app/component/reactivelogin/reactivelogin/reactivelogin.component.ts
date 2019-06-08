import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivelogin',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.css']
})
export class ReactiveloginComponent implements OnInit {
  loginForm:FormGroup;
  users: any = [];
 
  
  constructor(private _lg: FormBuilder, public router:Router) {
    this.createForm();
    this.users = JSON.parse(localStorage.getItem('users'));
   }
   createForm(){
    this.loginForm=this._lg.group({ 
     email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.pattern('')]],
     
   })
  }

  get email1() {
    return this.loginForm.controls.email;
  }

  get password1() {
    return this.loginForm.controls.password;
  }
 
 
  submitForm(){
    if(this.loginForm.valid) {
    
      for(let i=0;i<this.users.length; i++) {
        console.log(this.users[i])
        if(this.users[i].email === this.email1.value && this.users[i].password === this.password1.value) {
          alert('Login successful');
          break;
        } else if(this.users[i].email !== this.email1.value) {
          alert('User not found');
          this.loginForm.reset();
        } else if(this.users[i].email !== this.email1.value && this.users[i].password !== this.password1.value) {
          alert('wrong password');
          break;
        }
      }
    }
    
      
  }
   
  

  cancel(){
    this.router.navigate(['dashboard']);
  }



  ngOnInit() {
  }

}
