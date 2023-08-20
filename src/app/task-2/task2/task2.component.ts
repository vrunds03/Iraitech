import { Component } from '@angular/core';
import { ComponentX } from '../models/component-x.model';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  componentXList: ComponentX[] = [];

  constructor() { }

  addComponentX() {
    this.componentXList.push(new ComponentX());
  }
}
