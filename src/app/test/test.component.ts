import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  text: string = '';
  fontSize: number = 10;
  fontFamily: string = 'Arial';
  color: string = 'black';

  style = {};

  applyStyles() {
    this.style = {
      'font-size.px': this.fontSize,
      'font-family': this.fontFamily,
      'color': this.color,
    };
  }
}
