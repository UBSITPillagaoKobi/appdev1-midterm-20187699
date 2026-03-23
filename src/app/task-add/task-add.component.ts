// task-add.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-add',
  template: `./task-add.component.html`,
  standalone: true,
})
export class TaskAddComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low'
  };
  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    this.taskService.addTask(this.newTask);
    this.router.navigate(['/tasks']);
  }
}