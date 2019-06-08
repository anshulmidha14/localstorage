import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signForm:any=[];
  users: any =[];
  
  constructor(public router:Router) {

   }

  ngOnInit() {
  }
  submitForm(data){
    
    this.users.unshift(data.value);
    localStorage.setItem('users',JSON.stringify(this.users));
  }

}
