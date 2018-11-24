import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: string;
  private span;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.span = this.renderer.createElement('span');
  }

  @HostListener('mouseenter')
  mouseenter(even: Event) {
    this.span.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.span);
  }
  @HostListener('mouseleave')
  mouseleave(even: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.span);
  }
}