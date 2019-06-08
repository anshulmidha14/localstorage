import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   name: any;
  @Output() onemit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('hi')
    this.onemit.emit(this.name);
  }

}
