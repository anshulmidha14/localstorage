import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   
  @Input() data:any;
 public email;
 public pwd;

  constructor() {
   
   }

  ngOnInit() {
  }

  login(){
    if(this.email >='a' && this.email <='z')
    {
        alert("username is correct");
    }
    if(this.pwd>='0' && this.pwd<='9')
    {
      alert("Password is correct");
    }
    else{
      alert("please enter valid password and username");
    }
  }

   retrievedData = localStorage.getItem("users");
}
