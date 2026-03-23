// task-detail.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  template: './task-detail.component.html',
  standalone: true,
})
export class TaskDetailComponent {
  taskService = inject(TaskService);
  route = inject(ActivatedRoute);
  task?: Task;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getTaskById(Number(id));
    }
  }
}