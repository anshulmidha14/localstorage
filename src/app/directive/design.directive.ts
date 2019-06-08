import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDesign]'
})
export class DesignDirective {


  constructor(private _td: ElementRef) { 
    console.log(_td);
    this._td.nativeElement.style.backgroundColor='pink';
  }
  

}
