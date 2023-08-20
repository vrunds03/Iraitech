import { Component, Input } from '@angular/core';
import { ComponentX } from '../../models/component-x.model';
import { YComponent } from '../../models/y-component.model';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {
  // @Input() componentXName!: string;
  @Input() componentX!: ComponentX;
  yComponents: any[] = []
  componentXName = 'Component X'
  editMode: boolean = false
  addYComponent() {
    this.yComponents.push(new YComponent());
  }
  editName() {
    this.editMode = true;
  }
  changeName() {
    this.editMode = false;
  }
}
