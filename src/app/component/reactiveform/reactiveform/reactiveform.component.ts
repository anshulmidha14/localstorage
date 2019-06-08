import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signinForm:FormGroup;
  users: any =[];

  constructor(private _sg: FormBuilder, public router:Router) {
    this.createForm();
   }

   createForm(){
     this.signinForm=this._sg.group({ 
       name:['',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
       email: ['', [Validators.required, Validators.pattern('')]],
       mobile:['',[Validators.required,Validators.pattern('^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$')]],
       password:['',[Validators.required]],
       cpassword:['',Validators.required]
    })
   }

   get email1() {
     return this.signinForm.controls.email;
   }

  ngOnInit() {
  }

  submitForm(){
    if(this.signinForm.valid){
      console.log(this.signinForm.value);
      this.signinForm.removeControl('cpassword');
      if(JSON.parse(localStorage.getItem('users'))){
        this.users=JSON.parse(localStorage.getItem('users'));
      }
      for(let i=0;i<this.users.length; i++) {
        if(this.users[i].email === this.email1.value) {
          alert('Email already exist');
          break;
        } 
      }
      if(!this.users.includes(this.signinForm.value)) {
        this.users.unshift(this.signinForm.value);
        localStorage.setItem('users',JSON.stringify(this.users))
      }
    }
  }

  cancel(){
    this.router.navigate(['dashboard']);
  }

}
