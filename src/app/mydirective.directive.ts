import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class MydirectiveDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
}
