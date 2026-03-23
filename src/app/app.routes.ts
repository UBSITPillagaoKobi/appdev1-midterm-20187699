import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task-add', component: TaskAddComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: 'edit/:id', component: TaskEditComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}