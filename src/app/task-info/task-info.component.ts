import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-info',
  template: `./task-info.component.html`,
  standalone: true,
})
export class TaskInfoComponent {
  @Input() task!: Task;
}