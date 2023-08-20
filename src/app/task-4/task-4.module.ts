import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task4RoutingModule } from './task-4-routing.module';
import { Task4Component } from './task4/task4.component';
import { TopleftComponent } from './task4/topleft/topleft.component';
import { ToprightComponent } from './task4/topright/topright.component';
import { BottomleftComponent } from './task4/bottomleft/bottomleft.component';
import { BottomrightComponent } from './task4/bottomright/bottomright.component';
import { MiddleComponent } from './task4/middle/middle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Task4Component,
    TopleftComponent,
    ToprightComponent,
    BottomleftComponent,
    BottomrightComponent,
    MiddleComponent
  ],
  imports: [
    CommonModule,
    Task4RoutingModule,
    FormsModule
  ]
})
export class Task4Module { }
