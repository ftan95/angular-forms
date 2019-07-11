import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appThumbs]'
})
export class ThumbsDirective {

  constructor(private el: ElementRef) { }

  applyStyles(color: string): void {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles('#74baf5');
  }

  // @HostListener('mouseleave')
  // handleOnLeave() {
  //   this.applyStyles('#555');
  // }

  @HostListener('click')
  handleOnClick() {
    this.el.nativeElement.style.color = '#74baf5';
  }


}
