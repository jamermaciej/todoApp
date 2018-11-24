import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngOnInit(): void {
    const li = this.el.nativeElement;
    this.renderer.addClass(li, 'checked');
    this.renderer.setStyle(li, 'color', 'white');
   }
}
