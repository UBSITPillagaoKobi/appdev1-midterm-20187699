import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root', // Makes sure the service is available app-wide
})
export class TaskService {
  private tasks: Task[] = [
    // Initial task data (for testing purposes)
    { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2026-04-01', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2026-04-10', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', dueDate: '2026-04-15', status: 'Completed', priority: 'Low' }
  ];

  constructor() {}

  // Get all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Get task by ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  // Add a new task
  addTask(task: Task): void {
    // Assign a new ID (simple method for this example)
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  // Update an existing task
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  // Delete a task by ID
  deleteTask(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}