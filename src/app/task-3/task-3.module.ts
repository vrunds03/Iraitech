import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3RoutingModule } from './task-3-routing.module';
import { Task3Component } from './task3/task3.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [Task3Component],
  imports: [
    CommonModule,
    Task3RoutingModule,
    FormsModule

  ]
})
export class Task3Module { }
