import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1/task1.component';
import { Task1RoutingModule } from './task-1-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    Task1RoutingModule,
    FormsModule
  ]
})
export class Task1Module { }
