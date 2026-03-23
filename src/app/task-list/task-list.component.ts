import { Component, inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports:[RouterModule],
  templateUrl: './task-list.component.html',
  standalone: true,
})
export class TaskListComponent {
  router = inject(Router);
  taskService = inject(TaskService);
  tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}