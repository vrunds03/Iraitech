import { Component, Input } from '@angular/core';
import { YComponent } from '../../models/y-component.model';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css']
})
export class ComponentYComponent {
  @Input() yComponent!: YComponent;

  // constructor(private dataService: DataService) { }

  // saveYComponent(yComponent: YComponent) {
  //   this.dataService.saveData(yComponent)
  //     .subscribe(
  //       response => {
  //         console.log('Data saved:', response);
  //       },
  //       error => {
  //         console.error('Error saving data:', error);
  //       }
  //     );
  // }
}
