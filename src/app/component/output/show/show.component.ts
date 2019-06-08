import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
email:any;
pwd:any;
@Output() un = new EventEmitter();
@Output() psw = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
submit(){
  this.un.emit(this.email);
  this.psw.emit(this.pwd);
}
}
