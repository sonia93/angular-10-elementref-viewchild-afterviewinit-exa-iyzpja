import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakered]',
})
export class MakeredDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}