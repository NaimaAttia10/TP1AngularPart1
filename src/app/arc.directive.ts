import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appArc]'
})
export class ArcDirective {

  @Input() arcColor: string='';
  private availableColors: string[] = ['red', 'orange', 'green', 'yellow', 'pink'];

  @HostBinding('style.color') textColor: string = this.getRandomColor();
  @HostBinding('style.border') borderStyle: string = `solid ${this.getRandomColor()}`;


  private chooseColor(color: string): string {
    return color || this.getRandomColor();
  }

  @HostListener('keyup') onKeyUp() {
    this.textColor = this.getRandomColor();
    this.borderStyle = `2px solid ${this.getRandomColor()}`;
  }

  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.availableColors.length);
    return this.availableColors[randomIndex];
  }
}
