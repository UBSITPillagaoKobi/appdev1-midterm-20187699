// task-edit.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-edit',
  template: `./task-edit.component.html`,
  standalone: true,
})
export class TaskEditComponent {
  taskService = inject(TaskService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  task?: Task;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getTaskById(Number(id));
    }
  }

  saveTask() {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}