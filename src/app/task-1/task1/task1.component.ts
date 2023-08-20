import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  series: number[] = [2, 3, 10, 15, 26, 35, 50, 63];
  index!: number;
  result!: number;

  calculateMissingNumber(): void {
    if ((this.index + 1) % 2 === 0) {
      this.result = Math.pow(this.index + 1, 2) - 1;
    } else {
      this.result = Math.pow(this.index + 1, 2) + 1;
    }
  }
}
