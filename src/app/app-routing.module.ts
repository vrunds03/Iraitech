import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'task1', loadChildren: () => import('./task-1/task-1.module').then(m => m.Task1Module) },
  { path: 'task2', loadChildren: () => import('./task-2/task-2.module').then(m => m.Task2Module) },
  { path: 'task3', loadChildren: () => import('./task-3/task-3.module').then(m => m.Task3Module) },
  { path: 'task4', loadChildren: () => import('./task-4/task-4.module').then(m => m.Task4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
