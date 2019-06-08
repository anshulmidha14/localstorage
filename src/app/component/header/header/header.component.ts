import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
admin: Data[];
  

  constructor() { 
    this.admin=[
      {
        name:'sarita',
        mobile:123456789  ,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Neha',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Ruhan',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Ankur',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Tannu',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'rita',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'kabir',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Shubham',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Ayush',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      },
      {
        name:'Manisha',
        mobile:123456789,
        address:{
          city:'delhi',
          state:'New Delhi',
          country:'India'
        }
      }
    
    
    
    
    
    
    ];
  }

  

  ngOnInit() {
  }

}
