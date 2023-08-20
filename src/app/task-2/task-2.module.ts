import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2/task2.component';
import { Task2RoutingModule } from './task-2-routing.module';
import { ComponentXComponent } from './task2/component-x/component-x.component';
import { ComponentYComponent } from './task2/component-y/component-y.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Task2Component,
    ComponentXComponent,
    ComponentYComponent
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    FormsModule
  ]
})
export class Task2Module { }
