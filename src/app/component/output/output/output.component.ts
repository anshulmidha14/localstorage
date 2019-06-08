import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  email: any;
  pwd:any;

  constructor() { }

  ngOnInit() {
  }
receive1(e){
  console.log(e,'un')
this.email=e;
}
receive2(e){
  console.log(e,'psw')
this.pwd=e;
}
}
