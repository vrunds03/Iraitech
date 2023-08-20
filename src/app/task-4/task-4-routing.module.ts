import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task4Component } from './task4/task4.component';

const routes: Routes = [
    { path: '', component: Task4Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Task4RoutingModule { }
