import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  constructor(private _tr: ElementRef) { 
    console.log(_tr);
    this._tr.nativeElement.style.backgroundColor='lightblue';
  }

}
